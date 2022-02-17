import { Typography } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

const styles = {
    marginTop: {
        marginTop: '10px'
    }
}

function Email() {
  return (
        <Grid container spacing={2}>
          <Grid item sm={6}>
              <Typography variant='h3' style={styles.marginTop}>
              If Not Now, When? Let’s Work Together! 
            </Typography>
              <Typography variant='body1'>
              Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra. 
              </Typography>
              <img
                  src='/images/signature.jpg'
                  alt='signature'
                  style={{width: '100px'}}
              
              />
          </Grid>
          <Grid item sm={6}>
              <form>
                  <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                  />
                  <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email Address"
                      variant="outlined"
                      style={styles.marginTop}
                     
                  />
                  <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email Address"
                      variant="outlined"
                      multiline
                      rows={4}
                      style={styles.marginTop}
                  />
                  <Button
                      variant='contained'
                      fullWidth
                      color='error'
                      style={styles.marginTop}
                  > Send Message</Button>
            </form>
          </Grid>
        </Grid>
  )
}

export default Email