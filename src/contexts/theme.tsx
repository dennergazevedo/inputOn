import React, {
  useState,
  useContext,
  createContext,
} from "react";

import { ThemeProvider as BaseThemeProvider } from "styled-components";


import { lightTheme, darkTheme } from "../styles/themes";

interface IThemeContext{
  setThemeString: any,
  themeString: string | null,
}

const ThemeContext = createContext<IThemeContext>({setThemeString: '', themeString: ''});

const ThemeProvider: React.FC<any> = ({ children }) => {
  const [themeString, setThemeString] = useState(JSON.parse(localStorage.getItem('@inputon:theme') || 'light'));
  const themeObject = themeString === "dark" ? darkTheme : lightTheme;

  return (
    <>
      {
        themeObject &&
        <ThemeContext.Provider value={{ themeString, setThemeString }}>
          <BaseThemeProvider theme={themeObject}>
            {children}
          </BaseThemeProvider>
        </ThemeContext.Provider>
      }
    </>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("ThemeProvider não encontrado.");

  const { themeString, setThemeString } = context;

  function toggleTheme (){
    if (themeString === "light"){
      setThemeString("dark");
      localStorage.setItem('@inputon:theme', JSON.stringify('dark'))
    } else if (themeString === "dark"){
      setThemeString("light");
      localStorage.setItem('@inputon:theme', JSON.stringify('light'))
    } 
  }
  
  return {
    theme: themeString,
    toggleTheme,
  };
}

export { ThemeProvider, useTheme };