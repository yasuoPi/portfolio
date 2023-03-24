import React from 'react'
import { Footer, Contact, Portfolio, Haitem, Header} from './Containers';
import { Cta, Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Haitem />
        <Portfolio />
        <Cta />
        <Contact />
        <Footer />
    </div>
  )
}

export default App