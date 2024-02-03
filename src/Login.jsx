// components/Login.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, TextField, Button, Typography, Link, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulate login process
    // For demonstration purposes, assume login is successful
    console.log('Simulating login...');
    
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Check if the entered email and password match the stored data
      if (email === userData.email && password === userData.password) {
        console.log('Login successful!');
        // Redirect user to account page on successful login
        // For demonstration purposes, navigate to the account page after login
        setTimeout(() => {
          console.log('Redirecting to account page...');
          window.location.href = '/account'; // Navigate to the account page
        }, 2000); // Simulate a delay of 2 seconds
      } else {
        console.error('Invalid email or password');
        // Handle invalid email or password (e.g., display error message to user)
      }
    } else {
      console.error('User data not found');
      // Handle scenario where user data is not found (e.g., display error message to user)
    }
  };
  

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">Login Page</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
          </form>
          <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/register">Register here</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
