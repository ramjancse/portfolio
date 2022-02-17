import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
const styles = {
    main: {
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: '/images/subscribebg.png'
    },
    marginTop: {
        marginTop: '30px',
        marginBottom:'30px'
    }
}
function Subscribe() {
  return (
      <div>
          <Card style={styles.marginTop}>
              <CardContent>
              <Grid container style={styles.main}>
              <Grid item sm={8}>
                <Typography variant='h4' color='tomato'>
                    Dont worry for contact i`m available 
                </Typography>
              </Grid>
              <Grid item sm={4} style={{display: 'flexEnd'}}>
                <Typography variant='h3' color='tomato'>
                    <Button  variant='contained' color='error'> Contact Me Now</Button>
                </Typography>
              </Grid>
          </Grid> 
              </CardContent>
          </Card>
            
    </div>
  )
}

export default Subscribe