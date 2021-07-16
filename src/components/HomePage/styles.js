import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
   home: {
      overflow: 'hidden',
      height: '100vh',
      width: '100%',
      position: 'relative',
      zIndex: '1',
     
   },
   heroBg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: '0',
      right: '0',
      left: '0',
      top: '0',
      zIndex: '1',
      '&::after': {
         position: 'absolute',
         content: "''",
         width: '100%',
         height: '100%',
         bottom: '0',
         right: '0',
         left: '0',
         top: '0',
         background: 'linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, .4))',
      }

   },
   homeContent: {
      position: 'relative',
      zIndex: '2',
      textAlign: 'center'
   },
   subtitle: {
      letterSpacing: '.3rem',
      '@media (max-width: 630px)': {
         fontSize: '.8rem',
         marginBottom: '-3rem'
      },
      '@media (max-width: 500px)': {
         fontSize: '.5rem'
      },
   },
   mainTitle: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '5rem',
      width: '100%',
      textTransform: 'uppercase',
      '@media (max-width: 950px)': {
         fontSize: '3.5rem'
      },
      '@media (max-width: 630px)': {
         fontSize: '2.8rem'
      },
      '@media (max-width: 500px)': {
         fontSize: '2.4rem'
      },
      '@media (max-width: 375px)': {
         fontSize: '2rem'
      },
      '@media (max-width: 345px)': {
         fontSize: '1.5rem'
      }
   },
   height100: {
      height: '100%',
   }
}))