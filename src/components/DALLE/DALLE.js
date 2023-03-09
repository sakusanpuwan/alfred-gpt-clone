import React, { useState } from 'react';
import './DALLE.css'
const { Configuration, OpenAIApi } = require("openai");

const DALLE = () => {

  const [prompt,setPrompt] = useState("");
  const [result,setResult] = useState([]);
  const [checkURL,setCheckURL] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {

    try {
      const response = await openai.createImage({
        prompt: prompt,
        n:4,
        size:"512x512"
      });
      setResult(response.data.data)
      setCheckURL(response.data.data[0].url)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='DALLE-Container'>
      <h4>What would you like me to paint? 🎨</h4>
      <input 
        className='input' 
        onChange={(event) => setPrompt(event.target.value)}
        placeholder = "Type here..."
      />
      <button onClick={generateImage} className='button'>Click to paint!</button>
      <div className='image-container'>
        {checkURL.length > 0 ? result.map((image) => <img src={image.url} alt={prompt} className='result-image' />) : <></> } 
      </div>
    </div>
  )
}

export default DALLE;