
import './App.css'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Mainbody from './component/Mainbody'
import Footer from './component/Footer'

function App() {


  return (
 
    <div>
     <Header/>
   <div class="main">
     <Sidebar/>
    <Mainbody/>
   </div>

    <Footer/>
    </div>

    
  )
}

export default App
