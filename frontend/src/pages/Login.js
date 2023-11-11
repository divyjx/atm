import React from "react";
import styles from "./css/home.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const handleSummit = (e) => {
    e.preventDefault();

    // TODO: Validation

    const name = ''
    const balance = ''
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
      <h2>Enter Login Details</h2>

      <form className={styles.container} onSubmit={handleSummit}>
        <label>
          <input
            name="email"
            maxLength={50}
            minLength={3}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            maxLength={50}
            minLength={8}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <p>
        new user?
        <a href="signin">Signin</a>
      </p>
    </div>
  );
}
