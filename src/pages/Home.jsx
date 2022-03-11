import React from 'react';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router';
import useAuth from './../context/authContext';
function Home() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <Card>
      <p>Home</p>
      <Button
        variant="contained"
        onClick={() => {
          auth.setAuth(true);
          navigate('/dashboard');
        }}
      >
        Login
      </Button>
    </Card>
  );
}
export default Home;
