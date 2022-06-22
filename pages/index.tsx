import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Loginform from "./loginform";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Loginform />
    </div>
  );
};

export default Home;
