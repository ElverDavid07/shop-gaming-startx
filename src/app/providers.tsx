"use client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ApiSlice } from "@globalState/Api_Slice";
const provider = ({ children }: { children: React.ReactNode }) => {
 return (
  <>
   <ApiProvider api={ApiSlice}>{children} </ApiProvider>
  </>
 );
};

export default provider;
