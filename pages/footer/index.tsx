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
const Footer = () => {
  return (
    <Container>
      <div>
        <p>2022@wesionary.footer</p>
      </div>
    </Container>
  );
};

export default Footer;
