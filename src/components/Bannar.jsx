import { Button, Grid } from '@mui/material'
import React from 'react'
import Profile from '../images/profile.png'


function Bannar() {
  return (
    <div>
          
          <Grid container >
              <Grid item sm={12}>
                  <img
                      src={Profile}
                      style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
                      alt='prifile'
                  />
                  <Grid container spacing={2}>
                      <Grid item sm={6}>
                          <Button
                              fullWidth
                              variant='contained'
                              color='error'
                              href='#'
                          >
                            Hire me
                          </Button>
                      </Grid>
                      <Grid item sm={6}>
                          <Button
                              fullWidth 
                              variant='outlined'
                              color='error'
                              href='#'
                          >
                              Learn More
                          </Button>
                      </Grid>
                  </Grid>
                 
              </Grid>
    </Grid>
    </div>
  )
}

export default Bannar