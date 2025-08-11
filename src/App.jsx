import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Card from './pages/Contact'
import Navbar from './component/Navbar'
import axios from 'axios'

const App = () => {
  const [location,setLocation]=useState()
    const [opendropdown,setOpendropdown]=useState(false)

  const getLocation =async ()=>{
    navigator.geolocation.getCurrentPosition( async pos => {
      const{latitude, longitude} =pos.coords
      console.log(latitude,longitude);

       const url= `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
       try {
        const location = await axios.get(url)
 
        const exactlocation=location.data.address
        setLocation(exactlocation)
        setOpendropdown(false)
        console.log(exactlocation)
       } catch (error) {
        console.log(error)
        
       }
    })
  }
  useEffect(()=>{
    getLocation()
  },[])
  return (
    <BrowserRouter>
    <Navbar location={location} getCurrentPosition={getLocation} opendropdown={opendropdown} setOpendropdown={setOpendropdown}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
