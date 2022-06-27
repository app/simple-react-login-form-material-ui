import React, { useState, useEffect, useContext, createContext } from "react";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/Brightness7";
import { Box, IconButton, useMediaQuery } from "@mui/material";

const ModeSwitchContext = createContext();

export function ModeSwitchProvider({ children }) {
  const modeSwitch = useProvideModeSwitch();
  return (
    <ModeSwitchContext.Provider value={modeSwitch}>
      {children}
    </ModeSwitchContext.Provider>
  );
}

export const useModeSwitch = () => {
  return useContext(ModeSwitchContext);
};

function useProvideModeSwitch() {
  const [mode, setMode] = useState("dark");
  const toggleMode = (newMode) => {
    if (newMode) setMode(newMode);
    else setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };
  return [mode, toggleMode];
}

export function ModeSwitch() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const [mode, toggleMode] = useModeSwitch();

  useEffect(() => {
    if (prefersDarkMode === prefersLightMode) return;
    toggleMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        m: 2,
      }}
    >
      <IconButton onClick={() => toggleMode()} color="inherit">
        {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
}
