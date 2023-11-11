import React from "react";
import styles from "./css/login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { env } from "../config";
export default function Login() {
  const [card, setCard] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSummit = async (e) => {
    e.preventDefault();

    // TODO: Validation
    let name = "";
    let balance = "";
    try {
      const response = await axios.post(env.API_HOST + "/read/" + card);
      // console.log(response.data.card)
      if (response.data.card !== card){
        setError("Card number not present")
        return;
      }
      if (response.data.password === pass) {
        name = response.data.username;
        balance = response.data.balance;
        setError("");
      } else {
        setError("Invalid Password");
        return;
      }
    } catch (error) {
      setError("Invalid Card Number");
      return;
    }
    if (error === "") {
      const userDetails = {
        card: card,
        password: pass,
        name: name,
        balance: balance,
      };
      console.log(userDetails);
      navigate("/user", { state: { userDetails: userDetails } });
    }
  };
  return (
    <div className={styles.login}>
      <h2>Enter Login Details</h2>

      <form className={styles.container} onSubmit={handleSummit}>
        <label>
          <input
            name="card"
            maxLength={16}
            placeholder="Card"
            onChange={(e) => {setCard(e.target.value); setError("")}}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            maxLength={50}
            placeholder="Password"
            onChange={(e) => {setPass(e.target.value); setError("")}}
          />
        </label>
        <input type="submit" />
      </form>
      <p>
        new user ? {"  "}  
        <button onClick={()=>{navigate('/signin')}} className={styles.nostyle}>Signin</button>
      </p>
      {error && 
        <div className={styles.login_error}>
          {/* <p> Error Message: </p> */}
          <p>{error}</p>
        </div>
      }
    </div>
  );
}
