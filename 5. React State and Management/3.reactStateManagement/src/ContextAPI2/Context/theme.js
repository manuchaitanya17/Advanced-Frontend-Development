//Step-1: Create a Global Context Object importing createContext from React Libraray:
import {createContext, useContext} from "react";

export const ThemeContext = createContext();

//Step-2: Create a Provider Component that will wrap all the Children Components in which Data has to be shared:
export const ThemeContextProvider = ThemeContext.Provider


