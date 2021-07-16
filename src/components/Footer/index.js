import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';



const Footer = () => {
    const classes = useStyles();

    return (
        <Box p={2} textAlign="center"   className={classes.footerContainer} >
            <Typography color="textSecondary" variant="caption"  >
                Copyright © {new Date().getFullYear()}  ||    
                 <Typography color="primary" variant="caption" component="a" target="_blank" href="https://myportfolio-af035.web.app/"  >
                    {""}  Peter Anwar
                </Typography>
            </Typography>
        </Box>
    )
}

export default Footer
