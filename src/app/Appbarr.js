import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function Appbarr() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ROL
          </Typography>
          <Link color="inherit" className='btn btn-outline-light' to="/Login">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>

  );
}