import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'


//Pages
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Account from "./Pages/Account"

function App() {
  return (
    <div>
      yo
      <>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/> } />
          <Route path ="/signin" element={<Signin/>}/>
          <Route path ="/account" element={<Account/>}/>
        </Routes>
      </>

    </div>
  );
}

export default App;
