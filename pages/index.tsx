import { styled } from "linaria/lib/react";
import type { NextPage } from "next";
import Link from "next/link";

const Container = styled.div`
  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #26232c; */
    border-bottom: 1px solid black;
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
  );
};

export default Home;
