import React, { useState, useEffect } from 'react';
import styles from "./css/home.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function User() {
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = location.state?.userDetails
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!userDetails) {
      // If userDetails is not present, navigate to the home page
      navigate("/", {replace:true});
    } else {
      // Set user-related information from userDetails
      setCard(userDetails.card);
      setName(userDetails.name); // Assuming userDetails contains the name field
      setBalance(userDetails.balance); // Assuming userDetails contains the balance field
    }
  }, [userDetails, navigate]);

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear user-related information
    console.log(userDetails)
    setBalance(0);
    setCard('');
    setName('');
    navigate('/', {replace:true});
  };

  const handleCheck = (e) => {
    e.preventDefault();
    console.log(`User Card: ${card}`);
    console.log(`User Name: ${name}`);
    console.log(`Balance: ${balance}`);
  };

  return (
    <div className={styles.container}>
      <h2>User Details</h2>
      {card ? (
      <div className={styles.container}>
        <p>Card: {card}</p>
        <p>Name: {name}</p>
        <p>Balance: {balance}</p>
        <button>Deposit</button>
        <button>Withdraw</button>
        <button onClick={handleCheck}>Check Balance</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <p>User not authenticated. Please log in.</p>
    )}
    </div>
  );
}
