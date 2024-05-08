import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './1Headers/Header';
import Home from './2Home/Home';
import Best from './3Best/Best';
import Premium from './4Premium/Premium';
import Upcomming from './5Upcomming/Upcomming';
import Latest from './7Latest/Latest';
import Adone from './6Advertise/Adone';
import Adtwo from './6Advertise/Adtwo';
import Popular from './8Popular/Popular';
import About from './9About/About';
import Footer from './10Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Best/>
      <Premium/>
      <Upcomming/>
<Adone/>
<Latest/>
<Adtwo/>
<Popular/>
<About/>
<Footer/>
    </>
  )
}

export default App
