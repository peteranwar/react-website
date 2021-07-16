import React from 'react'

import HomePage from '../HomePage';
import About from '../About';
import Pricing from '../Pricing';



const HomeContainer = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <HomePage />
            <About />
            <Pricing />
          

        </div>
    )
}

export default HomeContainer
