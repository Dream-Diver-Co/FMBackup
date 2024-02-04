import React from 'react';
import { Navbar } from '../components';
import ChefHiringForm from '../components/ChefHiringForm';
import './Shef.css';

const Shef = () => {
  return (
    <div>
      <Navbar />
      <div className="shef-container">
        <h1 className="shef-heading">Hire a Chef for Your Home</h1>
        <p className="shef-subheading">Experience the joy of having a chef cook for you at home!</p>
        <ChefHiringForm />
      </div>
    </div>
  );
};

export default Shef;