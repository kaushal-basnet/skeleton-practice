import { styled } from "linaria/lib/react";
import type { NextPage } from "next";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Home: NextPage = () => {
  const Image = styled.img`
    @media (min-width: 768px) {
      height: 470px;
      margin-left: 30%;
    }
    @media (max-width: 768px) {
      width: 100%;
      object-fit: contain;
    }
  `;
  return (
    <>
      <Header />
      <Navbar />
      <Image src="/img/wesionary.png" alt="Picture of company" />
      <Footer />
    </>
  );
};

export default Home;
