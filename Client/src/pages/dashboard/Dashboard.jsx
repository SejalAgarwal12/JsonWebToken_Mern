import { Button, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    // clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/login')

  }

  useEffect(()=> {
    if(token){
      fetchUser();
    }else{
      navigate('/login')
    }  
  }, [navigate, token]);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/user", {
        headers:{
          "Authorization" : `Bearer ${token}`
        }
      })
      const result = await response.json();
      setUser(result)
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
    <Grid container spacing={2} style={{width:"39%", marginRight:"150px", marginLeft:"500px"}} >
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" onClick={handleLogout} style={{marginBottom:20}}>
          logout
        </Button>
        <Paper elevation={3} style={{padding:20}}>
          {user && (
            <>
            <Typography variant='h5' gutterBottom>User Details</Typography>
            <Typography variant='body1'>
              <strong> First Name: </strong>{user.firstName}
            </Typography>
            <Typography variant='body1'>
              <strong> Last Name: </strong>{user.lastName}
            </Typography>
            <Typography variant='body1'>
              <strong> Email: </strong>{user.email}
            </Typography>
            <Typography variant='body1'>
              <strong> Role: </strong>{user.role}
            </Typography>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
    </>
  )
}

export default Dashboard