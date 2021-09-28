import React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
} from '@mui/material'

import {
  useHistory
} from "react-router-dom";


export const RecoveryForm = () => {
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
            <TextField label="Recovery Email" autoFocus></TextField>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                gap:2
              }}
            >
              <Button variant='contained' color='error' >
                Recovery
              </Button>
              <Button variant='contained' color='primary'
                onClick={()=> history.push('/login')}
              >
                Go back
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default RecoveryForm
