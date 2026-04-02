
import './App.css'
import Navbar from './component/navbar'
import Banner from './component/Banner'
import Models from './component/Models'
import Steps from './component/Steps'
import Pricing from './component/Pricing'


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json();
}

const modelPromise  = getModels();


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner/>
      <Models modelPromise={modelPromise}/>
      <Steps/>
      
    </>
  )
}

export default App
