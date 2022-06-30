import { styled } from "linaria/lib/react";
import React from "react";
import { Footer, Frame, Header } from "../../components";
const Container = styled.div`
  background-color: #f4f4f4;
  /* height: 100%; */
`;
const MainHeader = styled.div`
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

const Sidebizz = () => {
  return (
    <>
      <Container>
        {/* MainHeader */}
        <MainHeader>
          <Header />
        </MainHeader>
        {/* maincontent */}
        {/* <Frame />
        <Footer /> */}
      </Container>
    </>
  );
};

export default Sidebizz;
