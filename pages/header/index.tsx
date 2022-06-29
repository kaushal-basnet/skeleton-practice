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
const Leftside = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  & .sidebizz {
    margin-top: 15px;
    cursor: pointer;

    & img {
      height: 25px;
    }
    & p {
      padding-left: 40px;
      color: crimson;
    }
  }
  & h2 {
    font-size: 30px;
  }
`;
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
            <h2>WESIONARY</h2>
            <div className="sidebizz">
              <Link href="/sidebizz">
                <img src="/img/logo.svg" alt="sidebizz" />
              </Link>
              <p>ClickMe</p>
            </div>
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
