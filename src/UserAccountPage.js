import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material'

import {
  useHistory
} from "react-router-dom";

export const UserAccountPage = () => {
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
            <Typography variant="h5" gutterBottom component="div">
              User account information
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                gap:2
              }}
            >
              <Button variant='contained' color='primary'
                onClick={()=> history.push('/login')}
              >
                Exit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default UserAccountPage
