// components/Register.js
// components/Register.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, TextField, Button, Typography, Link, Container } from '@mui/material';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = (e) => {
    e.preventDefault();
    
    // Simulate registration process
    // For demonstration purposes, assume registration is successful
    console.log('Simulating registration...');
    
    // Store user data in local storage or IndexedDB
    const userData = {
      username,
      email,
      password,
    };
  
    // Store user data in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Redirect user to login page after successful registration
    // For demonstration purposes, navigate to the login page after registration
    setTimeout(() => {
      console.log('Registration successful!');
      // Redirect user to account page on successful registration
      // For demonstration purposes, navigate to the login page after registration
      window.location.href = '/'; // Navigate to the login page
    }, 2000); // Simulate a delay of 2 seconds
  };
  
  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">Registration Page</Typography>
          <form onSubmit={handleRegister}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              margin="normal"
            />
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
            <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
          </form>
          <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/">Login here</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
