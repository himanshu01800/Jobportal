import { configureStore } from "@reduxjs/toolkit";
import  jobDetail from "../features/jobDetailSlice";
import userDetails from "../features/userDetailSlice";

export const store = configureStore({
    reducer: {
      app :jobDetail,
      app1:userDetails
    },});