import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Announcement from './components/home/annoucnment';
import Header from './components/home/header';
import Footer from './components/home/footer';
import SignUp from './components/signup/signup';
import Login from './components/login/login';


function App() {
  return (
    
    <>
    <Announcement/>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
     <Footer/>
    </>
    
    
  );
}

export default App;
