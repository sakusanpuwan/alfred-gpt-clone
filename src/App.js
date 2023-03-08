import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Logo from './assets/Logo.png'
import DALLE from './components/DALLE/DALLE';
import ChatGPT from './components/ChatGPT/ChatGPT';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <div className='NavBar'>
            <Link to='/alfred/dalle'><a>Alfred, paint me this picture....</a></Link>
            <Link to='/alfred'><img src={Logo} height="100px"/></Link>
            <Link to='/alfred/chat'><a>Alfred, answer me this question...</a></Link>
          </div>


        <Routes>
          <Route path='/alfred' element={<Home/>}/>
          <Route path='/alfred/dalle' element={<DALLE/>}/>
          <Route path='/alfred/chat' element={<ChatGPT/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
