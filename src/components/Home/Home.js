import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='ALFRED'>
        <ul>
          <li>A. rtificial</li>
          <li>L. anguage-based</li>
          <li>F. riendly</li>
          <li>R. esponsive</li>
          <li>E. lectronic</li>
          <li>D. ialogue</li>
        </ul>
      </div>
      <div className='info'>
        <h2>Welcome to A.L.F.R.E.D!</h2>
        <h3>An AI based bot powered by OpenAI's DALL·E & GPT-3 models</h3>
        <h4>Capable of generating images & text from scratch based on a prompt</h4>
      </div>
    </div>
  )
}

export default Home