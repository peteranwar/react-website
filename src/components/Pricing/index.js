import { Typography } from '@material-ui/core';
import { Grid, Container, Box, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';




const Pricing = () => {
    const classes = useStyles();

    return (
        <Box py="4rem" id="pricing" className={classes.pricingContainer}>
            <Container className={classes.height100}>
                <Box textAlign="center" mx="auto" py="4rem" px=".2rem" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <Typography variant="body1" color="primary">
                        Tempor Incididunt U
                    </Typography>
                    <Typography variant="h4" >
                        Our Products Pricing
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                    </Typography>
                </Box>
                <Grid container className={classes.height100} spacing={3} alignItems="center">
                    <Grid item md={4} sm={6} style={{ margin: 'auto' }} data-aos="zoom-out-down">
                        <Box p="1rem" className={classes.priceCard}>

                            <Box >
                                <Typography variant="h5" color="primary">
                                    Basic
                                </Typography>
                            </Box>
                            {/* price Header */}
                            <Box className={classes.priceHeader} display="flex" py="2rem" justifyContent="space-between" alignItems="center" >
                                <Box display="flex" width="50%">
                                    <sub>$</sub>
                                    <Box display="flex" flexDirection='column' textAlign="center" justifyContent="center">
                                        <Typography variant="h4" >
                                            20
                                        </Typography>
                                        <small>Month</small>
                                    </Box>

                                </Box>
                                <Typography variant="subtitle2" color="textSecondary" >
                                    It has survived not only five centuries, but also the leap into electronic.
                                </Typography>
                            </Box>

                            {/* pricing Details */}
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Full access
                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Unlimited Bandwidth

                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Powerful Admin Panel
                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Email Accounts

                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    8 Free Forks Every Monthsl
                                </Typography>
                            </Box>
                            <Box my={3} mx="auto" display="flex" justifyContent="center">
                                <Button variant="contained" size="large">
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6} style={{ margin: 'auto' }} data-aos="zoom-out-down">
                        <Box p="1rem" className={`${classes.priceCard} center`}>
                            <Box >
                                <Typography variant="h5" color="secondary">
                                    Unlimited
                                </Typography>
                            </Box>
                            {/* price Header */}
                            <Box className={classes.priceHeader} display="flex" py="2rem" justifyContent="space-between" alignItems="center" >
                                <Box display="flex" width="50%">
                                    <sub>$</sub>
                                    <Box display="flex" flexDirection='column' textAlign="center" justifyContent="center">
                                        <Typography variant="h4" color="secondary" >
                                            35
                                        </Typography>
                                        <small>Month</small>
                                    </Box>

                                </Box>
                                <Typography variant="subtitle2" color="secondary" >
                                    It has survived not only five centuries, but also the leap into electronic.
                                </Typography>
                            </Box>

                            {/* pricing Details */}
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="secondary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2" color="secondary" >
                                    Full access
                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="secondary">
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2" color="secondary">
                                    Unlimited Bandwidth

                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="secondary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2" color="secondary">
                                    Powerful Admin Panel
                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="secondary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2" color="secondary" >
                                    Email Accounts

                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="secondary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2" color="secondary">
                                    8 Free Forks Every Monthsl
                                </Typography>
                            </Box>
                            <Box my={5} mx="auto" display="flex" justifyContent="center">
                                <Button variant="outlined" size="large">
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6} style={{ margin: 'auto' }} data-aos="zoom-out-down">
                        <Box p="1rem" className={classes.priceCard}>

                            <Box >
                                <Typography variant="h5" color="primary">
                                    Prfessional

                                </Typography>
                            </Box>
                            {/* price Header */}
                            <Box className={classes.priceHeader} display="flex" py="2rem" justifyContent="space-between" alignItems="center" >
                                <Box display="flex" width="50%">
                                    <sub>$</sub>
                                    <Box display="flex" flexDirection='column' textAlign="center" justifyContent="center">
                                        <Typography variant="h4" >
                                            20
                                        </Typography>
                                        <small>Month</small>
                                    </Box>

                                </Box>
                                <Typography variant="subtitle2" color="textSecondary" >
                                    It has survived not only five centuries, but also the leap into electronic.
                                </Typography>
                            </Box>

                            {/* pricing Details */}
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Full access
                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Unlimited Bandwidth

                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Powerful Admin Panel
                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    Email Accounts

                                </Typography>
                            </Box>
                            <Box display="flex" my="1rem">
                                <Typography variant="subtitle2" color="primary" >
                                    &#10004; &nbsp;&nbsp;
                                </Typography>
                                <Typography variant="subtitle2"  >
                                    8 Free Forks Every Monthsl
                                </Typography>
                            </Box>
                            <Box my={3} mx="auto" display="flex" justifyContent="center">
                                <Button variant="contained" size="large">
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Pricing
