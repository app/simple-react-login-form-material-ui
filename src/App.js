import React from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ModeSwitch, useModeSwitch, ModeSwitchProvider } from "./ModeSwitch";
import LoginForm from "./LoginForm.js";
import RecoveryForm from "./RecoveryForm.js";
import UserAccountPage from "./UserAccountPage.js";

const getCustomPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? { background: { default: "#1b1b1b" } } : {}),
  },
});

function ThemeManager({ children }) {
  const [mode] = useModeSwitch();
  const theme = createTheme(getCustomPalette(mode));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const App = () => {
  return (
    <ModeSwitchProvider>
      <ThemeManager>
        <CssBaseline />
        <ModeSwitch />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/recovery">
            <RecoveryForm />
          </Route>
          <Route path="/">
            <UserAccountPage />
          </Route>
        </Switch>
      </ThemeManager>
    </ModeSwitchProvider>
  );
};

export default App;
