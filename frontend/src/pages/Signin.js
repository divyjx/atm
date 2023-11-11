import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/login.module.css";
import { useState } from "react";
import { env } from "../config";
import axios from "axios";

export default function Signin() {
  const [card, setCard] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSummit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        card: card,
        username: name,
        password: pass,
        balance: balance,
      };
      const response = await axios.post(env.API_HOST + "/create/", body);
      // console.log(response);
      if (response.data.card !== card) {
        setError("User Already exists");
        return;
      }
    } catch (error) {
      // console.log(error);
      // console.log(error.response.status === 400);
      if (error.response.status === 400 && error.response.data.card !== null) {
        setError("User Already exists");
      } else {
        setError("Invalid request");
      }
      return;
    }
    const userDetails = {
      card: card,
      password: pass,
      name: name,
      balance: balance,
    };
    navigate("/user", { state: { userDetails: userDetails } });
  };
  return (
    <div className={styles.login}>
      <h2>Enter New User Details</h2>
      <form className={styles.container} onSubmit={handleSummit}>
        <label>
          <input
            name="card"
            maxLength={16}
            placeholder="Card"
            // type="number"
            onChange={(e) => {
              setCard(e.target.value);
              setError("");
            }}
          />
        </label>
        <label>
          <input
            name="username"
            maxLength={50}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            maxLength={50}
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
              setError("");
            }}
          />
        </label>
        <label>
          <input
            type="number"
            name="balance"
            min={100}
            placeholder="Initail Deposit"
            onChange={(e) => {
              setBalance(e.target.value);
              setError("");
            }}
          />
        </label>
        <input type="submit" />
        <button onClick={() => navigate("/")}>Home</button>
      </form>
      {error && (
        <div className={styles.login_error}>
          {/* <p> Error Message: </p> */}
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
