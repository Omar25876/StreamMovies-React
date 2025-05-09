import React from 'react'
import Style from './Login.module.css'
import { Box, Button, Grid, InputAdornment, inputBaseClasses, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  
  const navigateToHome = useNavigate();

  function handleLoginClick () {
    navigateToHome('/')
  }
  return <>
    <Box
      sx={{
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 600,
          height: 500,
          backgroundColor: '#1c1c1c',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          marginBottom={7}
          sx={{ color: '#fff', fontWeight: 'bold' }}
        >
          Stream <Typography  variant="span" sx={{ color: '#5857B0',  fontWeight: 'bold'  }}>Movies</Typography>
        </Typography>
      

       <TextField
                 fullWidth
                 margin='normal'
                 sx={
                   {
                     color: '#fff',
                     '& .MuiOutlinedInput-root': {
                       '& fieldset': {
                         borderColor: '#fff',
                       },
                       '&:hover fieldset': {
                         borderColor: '#fff',
                       },
                       '&.Mui-focused fieldset': {
                         borderColor: '#fff',
                       },
                     },
                   }
                 }
                 InputLabelProps={{ style: { color: '#fff' } }}
                 InputProps={{ style: { color: '#fff' } }}
             label="Email"
             variant="outlined"
             slotProps={{
               htmlInput: {
                 sx: { textAlign: 'left' },
                 style: { color: '#fff' },
               },
               input: {
                 endAdornment: (
                   <InputAdornment
                     position="end"
                     sx={{
                       alignSelf: 'flex-end',
                       opacity: 0,
                       fontSize: '0.8rem',
                       fontWeight: 'bold',
                       backgroundColor: '#5857B0',
                       borderRadius: '4px',
                       padding: '2px 4px',
                       marginLeft: '5px',
                       marginRight: '5px',
                       marginBottom: '15px',
                       pointerEvents: 'none',
                       color: '#fff',
                       [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                         opacity: 1,
                       },
                     }}
                   >
                     @gmail.com
                   </InputAdornment>
                 ),
               },
             }}
           />

        <TextField
                         sx={
                          {
                            color: '#fff',
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#fff',
                              },
                              '&:hover fieldset': {
                                borderColor: '#fff',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#fff',
                              },
                            },
                          }
                        }
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
  
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: 12,
            backgroundColor: '#5857B0',
            '&:hover': {
              backgroundColor: '#5827B0',
            },
            fontWeight: 'bold',
            fontSize: '1.15rem',
          }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </Paper>
    </Box>
  </>  
}


