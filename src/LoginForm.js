import React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
} from '@mui/material'

import {
  Link,
  useHistory,
} from "react-router-dom";

export const LoginForm = () => {
  const history = useHistory()
  return (
    <>
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
                gap:2
              }}
            >
              <Button variant='contained' color='primary'
                onClick={()=> history.push('/')}
              >
                Login
              </Button>
              <Link to={{pathname:"/recovery"}}>
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginForm
