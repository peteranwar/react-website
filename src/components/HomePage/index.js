import { Typography } from '@material-ui/core';
import { Grid, Container, Box, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import useStyles from './styles';
import Video from "../../assets/videos/video.mp4";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const HomePage = () => {
    const classes = useStyles();

  

    return (
        <div id="home" className={classes.home}>
            <div className={classes.heroBg}>
                <video autoPlay loop muted src={Video} type="video/mp4" ></video>
            </div>
            <Container className={classes.height100}>
                <Grid container className={classes.height100} alignItems="center">
                    <Grid item md={12} style={{margin: 'auto'}}>
                        <Box className={classes.homeContent} data-aos="fade-up">
                            <Typography color="textSecondary" variant="subtitle1" className={classes.subtitle}>WELCOME TO OUR WEBSITE</Typography>
                            <Swiper autoplay={{
                                "delay": 5500,
                                "disableOnInteraction": false
                            }} direction={'vertical'} pagination={{
                                "clickable": true
                            }} className="mySwiper">
                                <SwiperSlide>
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography className={classes.mainTitle} gutterBottom color="secondary" variant="h1">WE ARE&nbsp;</Typography>
                                    <Typography className={classes.mainTitle} gutterBottom color="primary" variant="h1">  developers</Typography>
                                </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography className={classes.mainTitle} gutterBottom color="secondary" variant="h1">WE ARE&nbsp;</Typography>
                                        <Typography className={classes.mainTitle} gutterBottom color="primary" variant="h1">  DESIGNERS</Typography>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide >
                                        <Typography className={classes.mainTitle} gutterBottom color="secondary" variant="h1">WE ARE STRONG</Typography>
                                </SwiperSlide>

                            </Swiper>
                            <Typography  gutterBottom color="secondary" variant="h6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ab  <br />
                                delectus dolorem nemo.
                            </Typography>

                            <Box pt={4}>
                                <Button variant="outlined" color="primary" component="a"  size="large">
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


        </div>
    )
}

export default HomePage
