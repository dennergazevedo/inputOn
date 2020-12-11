import React, {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

import { ThemeProvider as BaseThemeProvider } from "styled-components";


import { lightTheme, darkTheme } from "../styles/themes";

interface IThemeContext{
  setThemeString: any,
  themeString: string,
}

const ThemeContext = createContext<IThemeContext>({setThemeString: '', themeString: ''});

const ThemeProvider: React.FC<any> = ({ children }) => {
  const [themeString, setThemeString] = useState("light");
  const themeObject = themeString === "dark" ? darkTheme : lightTheme;

  useEffect(()=>{
    function loadStorageData(){
      const storageTheme = localStorage.getItem('@inputon:theme');
      if(storageTheme) setThemeString(JSON.parse(storageTheme));
    }
    loadStorageData();
  }, [])

  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <BaseThemeProvider theme={themeObject}>
        {children}
      </BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider");

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