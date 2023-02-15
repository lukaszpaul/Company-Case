
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Protected from './components/Protected';

//Pages
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Account from "./Pages/Account"
import Calendar from "./Pages/Calendar"
import VideoCall from "./Pages/VideoCall"

import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/> } />
          <Route path ="/signin" element={<Signin/>}/>
          <Route path ="/account" element={
            <Protected>
              <Account/>
            </Protected>
          }/>
          <Route path ="/Calender" element={
            <Protected>
              <Calendar/>
            </Protected>
          }/>
          <Route path ="/VideoCall" element={
            <Protected>
              <VideoCall/>
            </Protected>
          }/>
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
