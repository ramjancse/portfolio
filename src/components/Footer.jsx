import { Grid, Typography } from "@mui/material"
import SocialMedia from "./SocialMedia"

const styles = {
    footer: {
        backgroundColor: '#080827',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        marginTop: '10px'
    },
    hireme: {
        fontSize: '30px',
    },
    

}
const hireme = 'Hireme@ramjan.com'
const address = {
    line1: '21B Baker Street, Post office Box 353',
    line2 : 'Park Road, USA - 215431'
}
const copyRight = 'Copyright ©2022 All rights reserved | This template is made by Ramjan'



function Footer() {
    return (
        <>      
            <Grid container style={styles.footer}>
                <Grid item xl={12}>
                    <Typography variant="h3"> {hireme} </Typography>
                    <Typography variant="subtitle1"> {address.line1 }</Typography>
                    <Typography variant="subtitle1"> {address.line2 }</Typography>
                </Grid>
                <Grid container spacing={ 2 } style={{marginTop: '40px'}}>
                <Grid item sm={8}>
                    <Typography variant="body1"> { copyRight } </Typography>
                </Grid>
                <Grid item sm={4}>
                    <SocialMedia />
                </Grid>
            </Grid>
            </Grid>
            
           

            
              
    </>
  )
}

export default Footer