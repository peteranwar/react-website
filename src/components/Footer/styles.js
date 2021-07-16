import { makeStyles } from '@material-ui/core/styles'



export default makeStyles((theme) => ({
    footerContainer:{
        background: '#000',
        '& a':{
            textDecoration: 'none',
            transition: 'all .2s ease',
            '&:hover': {
                letterSpacing: '2px'
            }
        }
    },
}))