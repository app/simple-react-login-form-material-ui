import React, {useState, useEffect} from 'react';
import {
  Box,
  IconButton,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/Brightness7';

import LoginForm from './LoginForm.js'
import RecoveryForm from './RecoveryForm.js'
import UserAccountPage from './UserAccountPage.js'
import {
  Route,
  Switch,
} from "react-router-dom";

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode,setMode] = useState(prefersDarkMode ? 'dark' : 'light')

  const theme = React.useMemo(
    () =>
    createTheme({ palette: { mode } }),
    [mode]
  );

  useEffect( () => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          m: 2,
        }}
      >
        <IconButton
          onClick={()=>setMode(mode==='light'?'dark':'light')}
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
        </IconButton>
      </Box>
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
    </ThemeProvider>
  )
};

export default App
