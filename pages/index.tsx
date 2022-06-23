import type { NextPage } from "next";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <img
        src="/img/wesionary.png"
        alt="Picture of company"
        style={{ height: "470px", marginLeft: "30%" }}
      />
      <Footer />
    </>
  );
};

export default Home;
