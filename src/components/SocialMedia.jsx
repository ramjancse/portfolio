import { Grid } from '@mui/material'
import React from 'react'



const styles = {
    
    gap: {
        marginRight: '5px',
    }
}
function SocialMedia() {
  return (
    <Grid container >
          <Grid item sm={12}>

               
                <img
                    src='/images/facebookColor.png'
                    alt='logo'
                    style={styles.gap}
                  
                /> 
                <img
                    src='/images/LinkdinColor.png'
                    alt='logo'
                    style={styles.gap}
                /> 
                <img
                    src='/images/twiter.png'
                    alt='logo'
                    style={styles.gap}
                /> 
                <img
                    src='/images/insta.png'
                    alt='logo'
                    style={styles.gap}
                /> 
                <img
                    src='/images/git.png'
                    alt='logo'
                    style={styles.gap}
                /> 
             
         </Grid>
   </Grid>
  )
}

export default SocialMedia