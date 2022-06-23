import React from "react";
import { styled } from "linaria/lib/react";
import Link from "next/link";

const Container = styled.div`
  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }
`;
const Leftside = styled.div``;
const Rightside = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 870px) {
    width: 20%;
  }
  @media screen and (max-width: 470px) {
    width: 40%;
  }
  & p {
    cursor: pointer;
    font-size: 600;
  }
`;
const Header = () => {
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
    </>
  );
};

export default Header;
