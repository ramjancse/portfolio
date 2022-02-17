import { Grid } from '@material-ui/core';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
const styles = {
    justify: {
        textAlign: 'justify'
    },
    marginTop: {
      marginTop: '50px'  
    },
    center: {
        textAlign: 'center'
    },
    circle: {
        borderRadius: '50%',
        width: '80px',
        marginTop: '10px',
        margiBottom: '10px',
        marginLeft: 'auto',
       marginRight: 'auto'
    }
}
const services = [
  {
    image: require('../images/design.png'),
    skill: 'UX Design',
    des : 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'
  },
  {
    image: require('../images/web.png'),
    skill: 'Web App',
    des : 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'
  },
  {
    image: require('../images/digital.png'),
    skill: 'Digital Marketing',
    des : 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'
  },

]

function Services() {
  return (
    <Grid container style={styles.marginTop}>
          <Grid item sm={6}>
              <Typography variant='h3'>
                What Services you will Get from me!
              </Typography>
        </Grid>
      
          <Grid container spacing={2} style={styles.marginTop}>
            {
          services.map( (service, index)=> 
          <Grid item sm={4}>
          <Card style={{alignItems: 'center'}}>
              <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.skill}
                  style={styles.circle}
              />
              <CardContent style={styles.center}>
                    <Typography variant='h6' >
                    {service.skill}
                    </Typography>
                    <Typography variant='body2'>
                   {service.des}
                    </Typography>
              </CardContent>
         </Card>
      </Grid>
          
          )
            }
        </Grid>
      
    </Grid>
  )
}

export default Services