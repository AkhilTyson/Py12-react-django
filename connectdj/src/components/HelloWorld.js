import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/apis/get/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div>

          <h1> HelloWorld </h1>
          <br/> <br/> <br/> 
          <h3> { message } </h3> 

    </div>
  );
}

export default HelloWorld;
