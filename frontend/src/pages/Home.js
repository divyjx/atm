import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/home.module.css";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <h2>Choose an Action</h2>
      <button onClick={() => navigate("/login")}> Login </button>
      <button onClick={() => navigate("/signin")}> Signin </button>
    </div>
  );
}
