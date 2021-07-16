import { Box, Grid, List, ListItem, useScrollTrigger, Slide } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './styles';
import { Link as NavLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import AOS from 'aos';
import LogoLight from '../../assets/images/logo-light.png'
import LogoDark from '../../assets/images/logo-dark.png'
import { IoIosArrowUp } from 'react-icons/io';


const Navbar = (props) => {
    const classes = useStyles();
    const [colorChange, setColorchange] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [showToTopBtn, setShowToTopBtn] = useState(false);

    const changeNavbarColorAndToggleToTopBtn = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
            setShowToTopBtn(true);
        }
        else {
            setColorchange(false);
            setShowToTopBtn(false);
        }
    };

   
    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColorAndToggleToTopBtn);
    }, [])

    
   
    const headerClasses = () => {
        return (
            `${classes.navContainer} ${colorChange ? classes.navScroll : ''}`
        )
    }

    const linksContainerClasses = () => {
        return (
            `${classes.linksContainer} ${openNav ? "open-nav" : ''} ${colorChange ? "light" : ''}`
        )
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <div className={`${classes.menuBtn} ${openNav ? classes.closeMenu : ''}`} onClick={() => setOpenNav(!openNav)} >
                <div className={`${classes.btnLine} ${colorChange ? "dark" : ''}` }></div>
                <div className={`${classes.btnLine} ${colorChange ? "dark" : ''}` }></div>
                <div className={`${classes.btnLine} ${colorChange ? "dark" : ''}` }></div>
            </div>
        <Box display="flex" alignItems="center" className={headerClasses()} data-aos="fade-right">
            {/* { openNav ? <CloseIcon color="primary" className={`${classes.menuBtn} ${openNav ? "close" : '' }`} onClick={() => setOpenNav(!openNav)}/> : <MenuIcon color="primary" className={`${classes.menuBtn} ${openNav ? "close" : '' }`} onClick={() => setOpenNav(!openNav)} /> } */}
          <Box>
            <NavLink onClick={toggleHome}>
                <img src={colorChange ?LogoDark : LogoLight} alt="Logo" className={classes.logo} />
            </NavLink>

          </Box>
            <Box display="flex" alignItems="center" className={classes.navContent}>
                <List className={linksContainerClasses()}>
                    <ListItem>
                        <NavLink className={classes.navLink}
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="home">Home</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink className={classes.navLink}
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="about">About</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink className={classes.navLink}
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="work">Our Work</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink className={classes.navLink}
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="pricing">Pricing</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink className={classes.navLink}
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="contact">Contact</NavLink>
                    </ListItem>
                </List>
              
            </Box>

        </Box>
            {/*  */}
            <Box onClick={toggleHome} className={`${classes.totOp} ${showToTopBtn ? "showToTopBtn" : ''}`}   display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <IoIosArrowUp />
                <IoIosArrowUp />
            </Box>
            </>

    )
}

export default Navbar
