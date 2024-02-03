// components/Account.js

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Container, Avatar, CircularProgress } from '@mui/material';
import axios from 'axios';

function Account() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserProfiles(response.data.slice(0, 10)); // Slice to get the first 10 profiles
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user profiles: ", err);
        setLoading(false);
      }
    };
    fetchUserProfiles();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center">Account Information</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {userProfiles.map((user, index) => (
            <Card key={index} sx={{ margin: '10px', width: '250px' }}>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Avatar sx={{ width: 80, height: 80, marginRight: '10px' }} alt="Profile Picture" src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                  <div>
                    <Typography variant="h6" sx={{ marginBottom: '5px' }}>Name:</Typography>
                    <Typography variant="body1">{user.name}</Typography>
                  </div>
                </div>
                <Typography variant="body1" sx={{ marginBottom: '5px' }}>Email: {user.email}</Typography>
                <Typography variant="body1" sx={{ marginBottom: '5px' }}>Phone: {user.phone}</Typography>
                <Typography variant="body1" sx={{ marginBottom: '5px' }}>Company: {user.company.name}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Account;
