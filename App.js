import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import SignUp from './component/SignUp';

import PrivateComponent from './component/PrivateComponent';
import Courses from './component/Courses';

import Offers from './component/Offers';
import Login from './component/Login';
import Home from './component/Home';
import Contact from './component/Contact'
import Discount from './component/Discount';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/About' element={<Offers/>}/>
      <Route path='/offers' element={<Discount/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/logout' />
      </Route>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
