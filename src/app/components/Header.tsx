"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [solid, setSolid] = useState(false);

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>

    </header>
  );
}
