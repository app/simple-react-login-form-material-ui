import React, {useState, useEffect} from 'react';
import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  Paper,
  TextField,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material'

import DarkModeIcon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/Brightness7';

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
      <Box sx={{mx:"auto",width:400}}>
        <Paper>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              mt: 1,
              gridTemplateColumns: 'repeat(1, 1fr)',
              p:3,
            }}
          >
            <TextField label="Username/Email" autoFocus></TextField>
            <TextField label="Password" type={'password'}></TextField>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
              }}
            >
              <Button variant='contained' color='primary' >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App
