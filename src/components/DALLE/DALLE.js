import React from 'react';


const DALLE = () => {
 
  console.log(process.env.REACT_APP_OPENAI_API_KEY);
  
  return (
    <div className='DALLE-Container'>DALL-E</div>
  )
}

export default DALLE;