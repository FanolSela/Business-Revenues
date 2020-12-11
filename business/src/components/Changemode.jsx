import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { dark, light, GlobalStyles } from './Themes';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi"

const Darkmode = () => {

  const [darkMode, setDarkMode] = useState("light");
  
  const changeMode = () => {
    darkMode === "light" ? setDarkMode("dark") : setDarkMode("light");
  }

  const styleButton = darkMode === "light" ? <HiMoon size={25} /> : <CgSun size={25} />;

  return (
    <div>
      <ThemeProvider theme={darkMode === "light" ? light : dark}>
        <GlobalStyles darkMode={darkMode === "light" ? light : dark}/>
        <styledApp>
          <button onClick={changeMode}>{styleButton}</button>
        </styledApp>
      </ThemeProvider>
    </div>
  );
};

export default Darkmode;