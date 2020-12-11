import React, {
  useState,
  useContext,
  createContext,
  useEffect
} from "react";

import { ThemeProvider as BaseThemeProvider } from "styled-components";

import { window } from 'browser-monads';


import { lightTheme, darkTheme } from "../styles/themes";

interface IThemeContext{
  setThemeString: any,
  themeString: string | null,
}

const ThemeContext = createContext<IThemeContext>({setThemeString: '', themeString: ''});

const ThemeProvider: React.FC<any> = ({ children }) => {
  const [themeString, setThemeString] = useState('');
  const themeObject = themeString === "dark" ? darkTheme : lightTheme;

  useEffect(()=>{
    setThemeString(JSON.parse(window.localStorage.getItem('@inputon:theme') || 'light'))
  },[])

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
      window.localStorage.setItem('@inputon:theme', JSON.stringify('dark'))
    } else if (themeString === "dark"){
      setThemeString("light");
      window.localStorage.setItem('@inputon:theme', JSON.stringify('light'))
    } 
  }
  
  return {
    theme: themeString,
    toggleTheme,
  };
}

export { ThemeProvider, useTheme };