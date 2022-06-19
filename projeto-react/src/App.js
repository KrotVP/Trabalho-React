
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Home from './Components/pages/Home';
import Teclados from './Components/pages/Teclados';
import Mouses from './Components/pages/Mouses';
import Produtos from './Components/pages/Produtos';

import Container from './Components/Layout/Container';
import Navbar from'./Components/Layout/Navbar';
import Footer from'./Components/Layout/Footer';

function App() {
  return (
   
    <Router>
      <Navbar/>
        
            <Routes> 
              <Route path="/" element={<Home/>}/>
              <Route exact path="Teclados/*" element={<Teclados/>}/>
              <Route exact path="Mouses/*" element={<Mouses/>}/>
              <Route exact path="Produtos/*" element={<Produtos/>}/>  
               
            </Routes>
            
          
     
        <Footer/>
      
    </Router>
  )
}

export default App;




