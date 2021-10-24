import React from 'react'
import { Box, Button, Paper, TextField, Link } from '@mui/material'
import { useHistory } from "react-router-dom"

export default function LoginForm() {
  const history = useHistory()
  return (
    <Box sx={{ mx: "auto", width: 400 }}>
      <Paper>
        <Box
          sx={{
            display: 'grid', gap: 2, mt: 1, p: 3,
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
        >
          <TextField label="Username/Email" autoFocus />
          <TextField label="Password" type={'password'} />
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row-reverse' }} >
            <Button variant='contained' color='primary'
              onClick={() => history.push('/')}
            >
              Login
            </Button>
            <Link href="#"
              onClick={(event) => {
                event.preventDefault(); history.push('/recovery')
              }}
            >
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
