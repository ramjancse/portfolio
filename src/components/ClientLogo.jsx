import { Grid } from '@mui/material'
import React from 'react'
const styles = {
    review: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10px',
      marginBottom: '10px',
        height: '200px'
    },
}
function ClientLogo() {
  return (
    <div>
          <Grid container spacing={5} style={styles.review}>
            <Grid item sm={3}>
                  <img
                      src='/images/nike.png'
                      alt='logo'
                  /> 
            </Grid>
            <Grid item sm={3}>
                  <img
                      src='/images/ins.png'
                      alt='logo'
                  /> 
            </Grid>
            <Grid item sm={3}>
                  <img
                      src='/images/shell.png'
                      alt='logo'
                  /> 
            </Grid>
            <Grid item sm={3}>
                  <img
                      src='/images/m.png'
                      alt='logo'
                  /> 
            </Grid>
          </Grid>
    </div>
  )
}

export default ClientLogo