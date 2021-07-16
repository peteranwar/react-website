import { deepOrange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';



export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#76b818'
    },
    secondary: {
      main: '#fff',
    },
    text: {
      secondary: '#a9a9a9',
      primary: '#fff'
    },
  },
  transitions: {
    easing: {
      easeInOut: 'all .5s ease-in-out'
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    h2: {
      fontWeight: '700',
      '@media (max-width: 600px)': {
        fontSize: '2.8rem',
      },
      '@media (max-width: 450px)': {
        fontSize: '1.8rem',
      },
    },
    h6: {
      fontWeight: '400',

      '@media (max-width: 450px)': {
        fontSize: '1rem',
      },
    },
    caption: {
      fontSize: '1.2rem'
    }
  }
});

theme.props = {

  MuiButton: { // `MuiButton` is the global class name for the <Button /> component

    disableElevation: false, // this prop disables the drop shadow on all Buttons
  },

};

theme.overrides = {

  MuiButton: {

    root: {

      borderRadius: 4, // square corners

      textTransform: 'uppercase', // removes uppercase transformation
      colorInherit: 'white'
    },
  },
};