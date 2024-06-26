// import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './component/Home';
import Navbar from './component/navbar';
import Join from './component/join';
import Work from './component/Work';
import React, { } from 'react';
import Footer from './component/Footer';
import About from './component/About';
import Hom from './component/hom';





// const petureFre=new URL("./image/ran.jpeg" , import.meta.url)

function App() {

  
  return (
   <> <div><Navbar/></div>            
   <Hom></Hom>
  <section className='mainContaner' >
      <div><Home ></Home> </div>

          <div className='move'></div>
  </section>
            <Work></Work>
            <Join/>
            <About></About>
            <Footer>
            </Footer>
            
  </>
  );
}

export default App;
