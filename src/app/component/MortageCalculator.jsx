import React, { useState } from 'react';
import './MortgageCalculator.css';
import Navbar from './Navbar';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);
  const [zipCode, setZipCode] = useState('110020');

  const calculateMonthlyPayment = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanLength * 12;
    const monthlyPayment = (
      loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)
    ) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  return (
    <>
      <nav className="navbar">
    <div className="logo">
      <h1>Better</h1>
    </div>
    <div className="menu">
      <ul>
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Refinance</a>
        </li>
        <li>
          <a href="#">HELOC</a>
        </li>
        <li>
          <a href="#">Rates</a>
        </li>
        <li>
          <a href="#">Better+</a>
        </li>
      </ul>
      <ul>
        <li  style={{border:"1px solid white", borderRadius:"50%" , width:"60px", scale:0.8}}>
          <a href="#"><PhoneCall className="phone-icon" size={20} color="#FFFFFF" /></a>
        </li>
        <li>
          <a href="#">Sign in</a>
        </li>
      </ul>
    </div>
  </nav>
    <div className="mortgage-container">
      <h1 className="title">Mortgage Calculator</h1>
      <p className="subtitle">Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>

    <div className='calculator'>
      
    </div>
    </div>
    </>
  );
};

export default MortgageCalculator;