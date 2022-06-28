import { styled } from "linaria/lib/react";
import React from "react";
import { Findjoblisting, Progress } from "../../molecules";

const MainContent = styled.div`
  display: flex;
  gap: 24px;
  width: 1000px;
  margin: auto;
`;
const LeftContent = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  width: 200px;
  padding: 16px;
`;
const RightContent = styled.div`
  background-color: #ffffff;
  width: 776px;
  padding: 16px;
`;
const Frame = () => {
  return (
    <MainContent>
      <LeftContent>
        <Findjoblisting />
      </LeftContent>
      <RightContent>
        <Progress />
      </RightContent>
    </MainContent>
  );
};
export { Frame };
