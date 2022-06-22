import { styled } from "linaria/lib/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";

const Container = styled.div`
  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #26232c; */
    /* border-bottom: 1px solid black; */
    padding: 15px;
  }
`;
const Leftside = styled.div``;
const Rightside = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  & p {
    cursor: pointer;
    font-size: 600;
  }
`;
const Home: NextPage = () => {
  return (
    <>
      <Container>
        <header>
          <Leftside>
            <h1>WESIONARY</h1>
          </Leftside>
          <Rightside>
            <Link href="/login">Login</Link>
            <Link href="/signup">SignUp</Link>
          </Rightside>
        </header>
      </Container>
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
