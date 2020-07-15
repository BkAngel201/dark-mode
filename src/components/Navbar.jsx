import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'
import { useHistory } from 'react-router-dom'

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const history = useHistory();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  const handleOnChangeSelectElement = (e) => {
      history.push(`/${e.target.value}`)
  }
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <select onChange={handleOnChangeSelectElement}>
        <option value=''>See All</option>
        {
          props.coinData.map((item, index) => (
            <option value={item.id}>{item.name}</option>
          ))
        }
      </select>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
