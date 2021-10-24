import React from 'react';
import { Route, Switch } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { ModeSwitch, useModeSwitch, ModeSwitchProvider } from './ModeSwitch'
import LoginForm from './LoginForm.js'
import RecoveryForm from './RecoveryForm.js'
import UserAccountPage from './UserAccountPage.js'

function ThemeManager({ children }) {
  const [mode] = useModeSwitch()
  const theme = createTheme({ palette: { mode } })
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
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
  )
}

export default App
