import { makeStyles } from '@material-ui/core/styles'



export default makeStyles((theme) => ({
    navContainer: {
        position: 'fixed',
        top: '0',
        padding: '1.5rem 2rem',
        width: '100%',
        height: '40px',
        zIndex: '99',
    },
    navScroll: {
        boxShadow: '0 0 3px ',
        background: 'white',
        height: '20px',
        opacity: '.8',
        boxShadow: `0 0 8px black`,
        '& a': {
            color: 'black'
        },

    },
    navContent: {
        width: '80%',
        justifyContent: 'flex-end'
    },
    linksContainer: {
        display: 'flex',
        color: 'white',
        paddingLeft: '2rem',

        '@media (max-width: 1000px)': {
            flexDirection: 'column',
            height: '100vh',
            width: '60%',
            background: 'black',
            opacity: '.85',
            right: '0',
            position: 'fixed',
            top: '0',
            paddingTop: '5rem',
            zIndex: '8',
            transition: theme.transitions.easing.easeInOut,
            transform: 'translateX(100%)',
            '&.open-nav': {
                transformOrigin: 'right',
                transform: 'translateX(0%)',
            },
            '&.light': {
                background: 'white',
                boxShadow: `0 0 8px #000`,
            }
        },

    },
    navLink: {
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        position: 'relative',
        width: 'max-content',
        transition: theme.transitions.easing.easeInOut,
        '&:hover': {
            color: theme.palette.primary.main,
            letterSpacing: '1px'
        },
        '&::after': {
            position: 'absolute',
            content: "''",
            width: '100%',
            height: '2px',
            bottom: '-5px',
            right: '0px',
            transition: theme.transitions.easing.easeInOut,
            background: theme.palette.primary.main,
            transform: 'scale(0)',
            transformOrigin: 'left',
        },
        '&.active': {
            color: theme.palette.primary.main,
            // pointerEvents: 'none',
            '&::after': {
                transform: 'scale(1)',
            }
        }
    },
    logo: {
        width: '70px',
        height: 'auto',
        transition: theme.transitions.easing.easeInOut,
        marginTop: '1rem',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05) translateX(10px)',
        },
        '@media (max-width: 1000px)': {
            position: 'fixed',
            left: '2.1rem',
            top: '.3rem',
        },
        '@media (max-width: 370px)': {
            left: '.6rem',
        }
    },
    socialIcons: {
        display: 'flex',
        color: 'white',
        '@media (max-width: 1000px)': {
            position: 'fixed',
            right: '5rem',
            top: '1.3rem',
        },
        '@media (max-width: 370px)': {
            right: '3.2rem',
            top: '1.5rem',
        }
    },
    iconItem: {
        padding: '0',
    },
    icon: {
        color: 'white',
        transition: theme.transitions.easing.easeInOut,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        padding: '.5rem',
        margin: '0 .2rem',
        boxSizing: 'border-box',
        '&:hover': {
            color: theme.palette.primary.main,
            boxShadow: `inset 0 0 9px ${theme.palette.primary.main}`,
            border: '1px solid currentColor',
            transform: 'scale(1.02)  translateY(-10px)',
        },
        '@media (max-width: 370px)': {
            width: '35px',
            height: '35px',
        }
    },
    // style on mobile
    menuBtn: {
        display: 'none', /////////////////
        position: 'absolute',
        position: 'fixed',
        right: '2.1rem',
        top: '1.8rem',
        cursor: 'pointer',
        zIndex: '999',
        transition: theme.transitions.easing.easeInOut,
        '@media (max-width: 1000px)': {
            display: 'block',
        },
        '@media (max-width: 370px)': {
            right: '1rem',
        }
    },
    closeMenu: props => ({
        transform: 'rotate(180deg)',
        // rotate LINE 1
        '& :nth-child(1)': {
            transform: 'rotate(45deg) translate(5px, 5px)',
        },
        // hide LINE 2
        '& :nth-child(2)': {
            opacity: 0,
        },
        // rotate LINE 3
        '& :nth-child(3)': {
            transform: 'rotate(-45deg) translate(11px, -9px)',
        }

    }),
    btnLine: {
        width: '1.9rem',
        height: '0.3rem',
        margin: '0 0 0.4rem 0',
        transition: theme.transitions.easing.easeInOut,
        background: 'white',
        '&.dark': {
            background: 'black'
        }
    },
    totOp: {
        background: '#000',
        position: 'fixed',
        bottom: "1rem",
        right: "1rem",
        width: "50px",
        height: "50px",
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'none',
        overflow: 'hidden',
        zIndex: '9',
        '& svg': {
            color: 'white',
            fontSize: '1.5rem',
            transition: 'all .2s ease',
        },
        '& svg:first-child': {
            transform: 'translateY(12px)'
        },
        '& svg:last-child': {
            transform: 'translateY(20px)'
        },
        '&.showToTopBtn': {
            display: 'flex',
            boxShadow: `1px 1px 2px ${theme.palette.primary.main}`,

            transition: theme.transitions.easing.easeInOut,
            '&:hover': {
                transform: ' translateY(-10px) scale(1.05)',
                background: 'linear-gradient(to top ,#385e04,#76b818)',
                '& svg:first-child': {
                    transform: 'translateY(5px)'
                },
                '& svg:last-child': {
                    transform: 'translateY(-10px)',
                    opacity: '.5'
                },
            }
        },
    }
}))