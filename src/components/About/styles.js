import { makeStyles } from '@material-ui/core/styles'
import imgAbout from '../../assets/images/about.jpg'

export default makeStyles((theme) => ({
   aboutContainer: {
      overflow: 'hidden',
      background: '#f5f5f5'

   },
   aboutBox: {
      boxShadow: '0 0 9px lightgray',
   },
   boxContent: {
      transition: theme.transitions.easing.easeInOut,
      '& svg':{
         fontSize: '1.8rem',
         marginBottom: '1rem',
      transition: theme.transitions.easing.easeInOut,

      },
      '&:hover':{
         background: theme.palette.primary.main,
         color: 'white',
         '& span': {
            background: 'white',
           width: '70px',

         },
         '& svg': {
            transform: 'translateY(-20px) scale(1.2)',
            color: "white"
         }
      }
   },
   line: {
      height: '3px',
      width: '50px',
      background: theme.palette.primary.main,
      margin: '1rem auto',
      display: 'block',
      transition: theme.transitions.easing.easeInOut,

   },
   aboutDarkSection: {
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${imgAbout}) `,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      '& blockquote:after, blockquote:before': {
         color: '#a9b991',
         verticalAlign: '-0.3em',
         fontSize: '2.5rem',
         padding: '0 .2rem'
      },
      '& blockquote:after': {
         content: 'close-quote',
      },
      '&  blockquote:before': {
         content: 'open-quote',
      }
   }
}))