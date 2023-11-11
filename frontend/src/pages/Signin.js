import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/home.module.css";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [balance, setBalance] = useState(0)
  const navigate = useNavigate()
  const handleSummit = (e) => {
    e.preventDefault();

    // TODO : Validation
    const userDetails = {
        email: email,
        password: pass,
        name : name,
        balance : balance
      };
    navigate("/user", { state: { userDetails: userDetails} })
    
  }
  return (
    <div className={styles.container}>
      <h2>Enter New User Details</h2>
      <form className={styles.container} onSubmit={handleSummit}>
        <label>
          <input
            name="email"
            maxLength={50}
            minLength={3}
            placeholder="Email"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            name="username"
            maxLength={50}
            minLength={3}
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            maxLength={50}
            minLength={8}
            placeholder="Password"
            onChange={(e)=>setPass(e.target.value)}

          />
        </label>
        <label>
          <input
            type="number"
            name="balance"
            max={10000}
            min={100}
            placeholder="Initail Deposit"
            onChange={(e)=>setBalance(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <button onClick={()=>navigate('/')}>Home</button>
    </div>
  );
}
