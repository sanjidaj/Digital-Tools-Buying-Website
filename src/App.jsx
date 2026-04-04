
import './App.css'
import Navbar from './component/navbar'
import Banner from './component/Banner'
import Models from './component/Models'
import Steps from './component/Steps'
import Pricing from './component/Pricing'
import Footer from './component/Footer'
import Cart from './component/Cart'
import Tab from './component/Tab'
import { useState } from 'react'


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json();
}

const modelPromise  = getModels();


function App() {
   const [activeTab, setActiveTab] = useState('model')
   const [carts, setCarts] = useState([])
 
  

  return (
    <>
      <Navbar></Navbar>
      {activeTab === "model" && <Banner/>}
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />
      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}
      {activeTab === "model" && <Steps/>}
      {activeTab === "model" && <Pricing/>}
      {activeTab === "model" && <Footer/>}
      
    </>
  )
}

export default App
