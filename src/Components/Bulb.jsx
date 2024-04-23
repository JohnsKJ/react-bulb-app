import React, { useState } from "react";

import styles from "./Bulb.module.css";

import img from "../assets/bulb.jpg";

export default function Bulb() {
  const [turnOn, setTurnOn] = useState(false);
  const [turnOff, setTurnOff] = useState(false);
  const [flicker, setFlicker] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>BULB PROJECT</h1>
      <img src={img}  
      className={
        turnOn ? styles.bulbOn:
        turnOff ? styles.bulbOff:
        flicker ? styles.bulbFlick:

        styles.img} />
      <div className={styles.buttons}>
        <button className={styles.onButton} onClick={() => setTurnOn(true)}>
          ON
        </button>
        <button
          className={styles.offButton}
          onClick={() => {
            setTurnOff(true);
            setTurnOn(false);
          }}
        >
          OFF
        </button>
        <button
          className={styles.flickButton}
          onClick={() => {
            setFlicker(true);
            setTurnOn(false);
            setTurnOff(false);
          }}
        >
          Flick
        </button>
      </div>
    </div>
  );
}
