import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
   pricingContainer: {
     
     
   },
   priceCard: {
      boxShadow: '0 0 9px lightgrey',
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.easing.easeInOut,
      '&:hover': {
         boxShadow: `1px 1px 2px ${theme.palette.primary.main}`,
         transform: 'translateY(-10px) scale(1.02)'
      },
      '&.center': {
         background: theme.palette.primary.main,
         '& sub':{
            color: 'white',
         },
         '& small': {
            color: 'white',
         },
         '& button': {
            borderColor: 'white !important',
            background: 'white !important',
         }
      }
   },
   priceHeader: {
      borderTop: '1px solid lightgrey',
      borderBottom: '1px solid lightgrey',
      margin: '1rem 0',
      '& sub':{
         color: theme.palette.text.secondary,
         marginRight: '.5rem',
         fontSize: '1rem'
      },
      '& small': {
         margin: 'auto',
         textAlign: 'center',
         color: theme.palette.text.secondary,
         fontSize: '.5rem'
      }

   }
}))