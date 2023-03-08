import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Logo from './assets/Logo.png'
import DALLE from './components/DALLE/DALLE';
import ChatGPT from './components/ChatGPT/ChatGPT';
import Home from './components/Home';

console.log(process.env);


function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <div className='NavBar'>
            <h3><Link to='/alfred/dalle'>Alfred, paint me a picture....</Link></h3>
            <Link to='/alfred'><img src={Logo} height="100px"/></Link>
            <h3><Link to='/alfred/chat'>Alfred, answer this question...</Link></h3>
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
