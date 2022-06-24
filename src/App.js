import logo from './logo.svg';
import './App.css';
import Topheader from './components/Header/Topheader';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Upload from './pages/Upload/Upload';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
       {/* <Topheader/> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/signup" element={<Signup />} /> 
              <Route path="/profile" element={<Profile />} />
            </Routes>   
    </div>
  );
}

export default App;
