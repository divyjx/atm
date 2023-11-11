import React, { useState, useEffect } from "react";
import styles from "./css/user.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { env } from "../config";
import axios from "axios";

export default function User() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = location.state?.userDetails;
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [pass, setPass] = useState("");
  const [transAmount, setTransAmount] = useState(0);
  const [transState, setTransState] = useState(0);
  const [error, setError] = useState("");
  
  // Getting Credentials from login/ signin page
  useEffect(() => {
    if (!userDetails) {
      navigate("/", { replace: true });
    } else {
      setCard(userDetails.card);
      setName(userDetails.name);
      setBalance(userDetails.balance);
      setPass(userDetails.password);
    }
  }, [userDetails, navigate]);

  // Logout
  const handleLogout = (e) => {
    e.preventDefault();
    setBalance(0);
    setCard("");
    setName("");
    setPass("");
    navigate("/", { replace: true });
  };

  // Read Operation
  const handleCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(env.API_HOST + "/read/" + card);
      setName(response.data.username);
      setBalance(response.data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  // Update Operation
  const handleTransaction = async (e) => {
    e.preventDefault();
    // Validation

    let newBalance = balance;

    if (transState === 1) {
      newBalance = Number(newBalance) + Number(transAmount);
    } else if (transState === 2) {
      newBalance = Number(newBalance) - Number(transAmount);
    } else {
      setTransState(0);
    }

    if (newBalance < 0 || transAmount < 100) {
      setError("Invalid Transaction");
      return;
    }
    try {
      const body = {
        card: card,
        username: name,
        password: pass,
        balance: newBalance,
      };
      const response = await axios.post(env.API_HOST + "/update/" + card, body);
      setBalance(response.data.balance);
    } catch (error) {
      setError("Error in transaction" + error);

    }
    setTransState(0);
    setTransAmount(0);
  };

  // Delete Operation
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await axios.post(env.API_HOST + "/delete/" + card);
      // console.log(response)
      setBalance(0);
      setCard("");
      setName("");
      setPass("");
      navigate("/", { replace: true });
    } catch (error) {
      setError("Error deleting account" + error);
    }
  };
  const UserDetails = ({ label, value }) => (
    <div className={styles.userDetail}>
    <p>{label}</p>
    <p>{value}</p>
  </div>

  );
    
  return (
    <div className={styles.main}>
      <h2>User Details</h2>
      {card ? (
        <div className={styles.container}>
          <div className={styles.userDetailsContainer}>
            <UserDetails label="Card" value={card} />
            <UserDetails label="Name" value={name} />
            <UserDetails label="Balance" value={balance} />
          </div>

          <div className={styles.control_buttons}>
            <button
              onClick={() => {
                setTransState(1);
                setTransAmount(0);
              }}
            >
              Deposit
            </button>
            <button
              onClick={() => {
                setTransState(2);
                setTransAmount(0);
              }}
            >
              Withdraw
            </button>
            <button onClick={handleCheck}>Check Balance</button>
            <button onClick={handleDelete}>Delete Account</button>
            <button onClick={handleLogout}>Logout</button>

          </div>
          {transState !== 0 && (
            <form onSubmit={handleTransaction} className={styles.transaction}>
              <p>{(transState === 1 ? "Deposit" : "Withdraw") + " Amount"}</p>
              <input
                onChange={(e) => {setTransAmount(e.target.value); setError('')}}
                min={100}
                max={10000}
                type="number"
              />
              <input type="submit" />
              <button
                type="button"
                onClick={() => {
                  setTransAmount(0);
                  setTransState(0);
                  setError("")
                }}
              >
                Close
              </button>
            </form>
          )}
        </div>
      ) : (
        <p>User not authenticated. Please log in.</p>
      )}
      {error && (
        <div className={styles.user_error}>
          {/* <p> Error Message: </p> */}
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
