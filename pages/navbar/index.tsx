import { styled } from "linaria/lib/react";
import React from "react";

const Container = styled.div`
  display: flex;
  background-color: #bdd3e7;
  width: 100%;
  justify-content: center;

  & div {
    display: flex;
    flex-direction: column;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <div>
        <h1>Home Page</h1>
        <p>click for Login and SignUp</p>
      </div>
    </Container>
   
  );
};

export default Navbar;
