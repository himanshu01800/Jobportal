import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//ReadAction
export const readJobs =createAsyncThunk("readJobs",
    async (args,{rejectWithValue})=>{
        try {
            const response = await fetch("https://666e8a09f1e1da2be52080fd.mockapi.io/jobportal");
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const result = await response.json();
            return result; 
          } catch (error) {
            return rejectWithValue(error.message);
          }
    }

)
//Delete Action
export const deleteJobs =createAsyncThunk("deleteJobs",
  async (id,{rejectWithValue})=>{
      try {
          const response = await fetch(`https://666e8a09f1e1da2be52080fd.mockapi.io/jobportal/${id}`,
            {method:"DELETE"}
          );
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
          console.log(result);
          return result; 
        } catch (error) {
          return rejectWithValue(error.message);
        }
  }

)

//CreateACTIONS
export const createJob =createAsyncThunk("createJob",
    async(data,{rejectWithValue})=>{
        try {
            const response = await fetch("https://666e8a09f1e1da2be52080fd.mockapi.io/jobportal", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const result = await response.json();
            return result; 
          } catch (error) {
            return rejectWithValue(error.message);
          }
}    
)


export const jobDetail =createSlice({
    name :"jobDetail",
    initialState :{
       jobs:[],
       loading:false,
       error:null
    },
    reducers:{

    },
    extraReducers : (builder)=>{
        builder
        .addCase(createJob.pending, (state) => {
            state.loading = true;
          })
          .addCase(createJob.fulfilled, (state, action) => {
            state.loading = false;
            state.jobs.push(action.payload);
          })
          .addCase(createJob.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(readJobs.pending, (state) => {
            state.loading = true;
          })
          .addCase(readJobs.fulfilled, (state, action) => {
            state.loading = false;
            state.jobs=action.payload;
          })
          .addCase(readJobs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(deleteJobs.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteJobs.fulfilled, (state, action) => {
            state.loading=false;
            const { id } = action.payload;
            console.log(id);
            if (id) {
              state.jobs = state.jobs.filter((ele) => ele.id !== id);
            }
            
          })
          .addCase(deleteJobs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }

})
export default jobDetail.reducer;