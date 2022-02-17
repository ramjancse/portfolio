
import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import Logo from '../images/logo.png';

const pages = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
function ApppBar() {
  return (
      <div style={{display:'flex', alignItems:'center', justifyContent: 'center' }}>
      <AppBar position="static">
      <Toolbar style={{ backgroundColor: 'white' }}>
        <Box flexGrow={1}>
        <Grid container>
          <Grid item sm={2}>
            <img
                    src={Logo}
                    alt="Logo not found"
                    style={{width: '40', height:'40'}}
                  
                />
          </Grid>
          <Grid item sm={7} style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          {
                  pages.map((page) =>
                      <Typography variant='h6' style={{color: 'black', margin:'5px', padding:'5px', alignItems:'center'}}> { page } </Typography>
                  )
          }
          </Grid>
          <Grid item sm={3} >
            <Button variant='contained' color='error' href="#"> Get Free Consultant </Button>
          </Grid>
        </Grid>
        </Box>
</Toolbar>
        </AppBar> 
      </div>
       
    
  )
}

export default ApppBar