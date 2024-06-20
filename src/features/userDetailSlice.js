import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//Read Action
export const readUsers =createAsyncThunk("readUsers",
    async (args,{rejectWithValue})=>{
        try {
            const response = await fetch("https://6671a641e083e62ee43c8473.mockapi.io/Users");
      
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


export const userDetail =createSlice({
    name :"userDetail",
    initialState :{
       users:[],
       loading:false,
       error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(readUsers.pending, (state) => {
            state.loading = true;
          })
          .addCase(readUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users=action.payload;
          })
          .addCase(readUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }) } }
        

)

    export default userDetail.reducer;