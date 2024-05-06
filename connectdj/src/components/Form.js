import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:8000/apis/post/', formData);
      console.log(response.data); 
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <input type="radio" name="gender" id="male" value="1" onChange={handleChange}
          required/>
        <label htmlFor="male">Male</label><br />
        <input type="radio" name="gender" id="female" value="0" onChange={handleChange}
          required />
        <label htmlFor="female">Female</label><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Form;
