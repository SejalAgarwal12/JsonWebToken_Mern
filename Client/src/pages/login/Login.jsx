import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const sendData = {
      email : data.get("email"),
      password : data.get("password")
    };
    console.log(sendData);
    fetch("http://localhost:7000/auth/login", {
      method: "post",
      body: JSON.stringify(sendData),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json()) 
      .then((d) => {
        console.log(d);

        if(d.user._id){
          navigate('/dashboard');
          // saving response of user 
          const user = JSON.stringify(d.user);
          // saving details to local storage
          localStorage.setItem("user", user)
          localStorage.setItem("token", d.token);
          // INSPECT-> APPLICATION-> LOCAL STORAGE
        }else{
          console.log("sign in failed");
          window.alert("sign in failed")
        }
        
      }) 
      .catch((err) => console.log("error occured", err));
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={login} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Donot have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
        
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default Login