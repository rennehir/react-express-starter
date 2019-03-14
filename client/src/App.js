import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const {
      data: { greeting }
    } = await axios.get(`/api/greeting?name=${encodeURIComponent(name)}`);
    setGreeting(greeting);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter your name: </label>
        <input id='name' type='text' value={name} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
};

export default App;
