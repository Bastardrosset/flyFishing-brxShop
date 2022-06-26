import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import{Container} from 'react-bootstrap';
import Footer from './componantes/Footer';
import Header from './componantes/Header';
import Home from './page/Home';
import DetailsProduct from './page/DetailsProduct';



const App = () => {
  return (
    <>
    <Router>
      <Header/>
        <main>
          <Container className='py-3'>
            <Routes>
              <Route exact path='/' element={<Home/>} /> 
              <Route path='/product/:id' element={<DetailsProduct/>} /> 
            </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
    </>
  )
}

export default App
