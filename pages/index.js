import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

async function setCookie() {
  console.log(await (await fetch("/api/set")).json());
}

async function unsetCookie() {
  console.log(await (await fetch("/api/unset")).json());
}

export default function Home() {
  useEffect(() => {
    setCookie();
  }, []);
  return (
    <div className={styles.container}>
      <button onClick={setCookie}>set</button>
      <button onClick={unsetCookie}>unset</button>
    </div>
  );
}
