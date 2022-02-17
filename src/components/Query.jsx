import { Grid, Typography } from '@mui/material'
import React from 'react'
const styles = {
    justify: {
        textAlign: 'justify'
    },
    marginTop: {
      marginTop: '50px'  
    }
}

function Query() {
  return (
      <Grid container spacing={ 2} style={styles.marginTop}>
      <Grid item sm={6}>
        <Typography variant='h4'>
          About Me
        </Typography>
        <Typography variant='h5'>
          Designing With Passion While Exploring The World.
        </Typography>
        <Typography variant='body2' style={styles.justify, styles.marginTop}>
          Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.

          Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. 
        </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant='h3'>
                Any Type Of Query & Discussion.
              </Typography>
              <Typography variant='h4' style={styles.marginTop}>
                Late talk with me
              </Typography>
              <Typography variant='h6' style={styles.marginTop}>
                hireme@ramjan.com
              </Typography>

              
          </Grid>
     </Grid>
  )
}

export default Query