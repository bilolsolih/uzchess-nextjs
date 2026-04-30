"use client";
import {createContext} from "react";

export const MyContext = createContext({});

export default function MyContextProvider({children, initialValue}) {
  return (
    <MyContext value={{isAuthenticated: initialValue}}>
      {children}
    </MyContext>
  )
}