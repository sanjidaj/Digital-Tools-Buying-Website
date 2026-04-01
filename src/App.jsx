
import './App.css'
import Navbar from './component/navbar'
import Banner from './component/Banner'
import Models from './component/Models'


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
      
    </>
  )
}

export default App
