import React, { useState } from 'react';
import './DALLE.css'
const { Configuration, OpenAIApi } = require("openai");

const DALLE = () => {

  const [prompt,setPrompt] = useState("");
  const [result,setResult] = useState("")

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {

    try {
      const response = await openai.createImage({
        prompt: prompt,
        n:1,
        size:"1024x1024"
      });

      const image_url = response.data.data[0].url;
      console.log(image_url);
      setResult(image_url)

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
      {result.length > 0 ? <img src={result} alt='result image' className='result-image' /> : <></> }
      
    </div>
  )
}

export default DALLE;