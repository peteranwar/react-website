import { Typography } from '@material-ui/core';
import { Grid, Container, Box, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';
import { GiSecretBook } from 'react-icons/gi'
import { SiMarketo } from 'react-icons/si'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'

const About = () => {
    const classes = useStyles();

    return (
        <div id="about" className={classes.aboutContainer}>

            <Box textAlign="center" mx="auto" px=".2rem" py="3rem" data-aos="zoom-in-up">
                <Typography variant="body1" color="primary">
                    Tempor Incididunt U
                </Typography>
                <Typography variant="h4" >
                    What We Do
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                </Typography>
            </Box>
            <Container className={classes.height100}>
                <Grid container className={classes.height100} spacing={3} alignItems="center">
                    <Grid item md={4} sm={6} style={{ margin: 'auto' }} data-aos="flip-left">
                            <Box className={classes.aboutBox}>
                                <Box textAlign="center" mx="auto"  px="2.5rem" py="4rem"  className={classes.boxContent}>
                                    <GiSecretBook />
                                    <Typography variant="h5" >
                                        Branding
                                    </Typography>
                                    <span className={classes.line}></span>
                                    <Typography variant="body2">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry’s standard dummy.
                                    </Typography>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item md={4} sm={6} style={{ margin: 'auto' }} data-aos="flip-left">
                            <Box className={classes.aboutBox}>
                                <Box textAlign="center" mx="auto"  px="2.5rem" py="4rem" className={classes.boxContent}>
                                    <SiMarketo />
                                    <Typography variant="h5" >
                                    Marketing
                                    </Typography>
                                    <span className={classes.line}></span>
                                    <Typography variant="body2">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry’s standard dummy.
                                    </Typography>

                                </Box>
                            </Box>
                    </Grid>
                    <Grid item md={4} sm={6} style={{ margin: 'auto' }} data-aos="flip-left">
                            <Box className={classes.aboutBox}>
                                <Box textAlign="center" mx="auto"  px="2.5rem" py="4rem" className={classes.boxContent}>
                                    <HiOutlinePresentationChartLine />
                                    <Typography variant="h5" >
                                    Presentation
                                    </Typography>
                                    <span className={classes.line}></span>
                                    <Typography variant="body2">
                                    Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry’s standard dummy.
                                    </Typography>

                                </Box>
                            </Box>
                    </Grid>
                    

                </Grid>



            </Container>

          <Box data-aos="flip-up" className={classes.aboutDarkSection} textAlign="center" py="7rem" mt="6rem" >
              <Container>
                  <Grid container>
                      <Grid item md={6} sm={10} style={{ margin: 'auto' }}>
                   <Typography variant="h5" color="secondary">
                       <blockquote>
                        Creativity is allowing yourself to make mistakes Art is knowing which ones to keep
                       </blockquote>
                   </Typography>
               <Typography variant="caption" color="primary">
               - Alice Johnson -
                   </Typography>

                      </Grid>

                  </Grid>
              </Container>
               
          </Box>



        </div>
    )
}

export default About
