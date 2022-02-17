import { Grid } from '@material-ui/core';
import { Card, CardContent, Typography } from '@mui/material';
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
    },
    image: {
        borderRadius: '50%',
        width: '50px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    review: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px'
    },

}

const feedbacks = [
    {
        image: require('../images/b1.png'),
        name: 'Jhone Doe',
        designation: 'Manager',
        des : 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'
    },
    {
        image: require('../images/b2.png'),
        name: 'Monica',
        designation: 'CTO',
        des : 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'
    },
    {
        image: require('../images/b3.png'),
        name: 'Brad',
        designation: 'CEO',
        des : 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'
    },
  
]
  
function Feedback() {
  return (
    <Grid container style={styles.marginTop}>
          <Grid item sm={8}>
              <Typography variant='h3'>
              Some Possitive Feedback That Encourage Me
              </Typography>
          </Grid>
          <Grid container spacing={2} style={styles.marginTop}>
              {
                  feedbacks.map( (feedback, index)=> 
                  <Grid item sm={4}>
                <Card style={{alignItems: 'center'}}>
                    <Grid container spacing={6} style={styles.review}> 
                          <Grid item sm={2}>
                              <img
                                  src={feedback.image}
                                  style={styles.image}
                                  alt={feedback.designation}
                              />
                          </Grid>
                          <Grid item sm={8}>
                              <Typography variant='subtitle1' color='red'> {feedback.name} </Typography>
                              <Typography variant='subtitle1' color='red'> {feedback.designation} </Typography>
                          </Grid>
                    </Grid>
                    <CardContent style={styles.justify}>
                          <Typography variant='body2'>
                            {feedback.des}
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

export default Feedback