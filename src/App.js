import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContainer from './components/HomeContainer';
import {theme} from './theme';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AOS from 'aos';


function App() {
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
    AOS.refresh();
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HomeContainer />
      <Footer />

    </ThemeProvider>
  );
}

export default App;
