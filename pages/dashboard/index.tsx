import { Button, Card } from "antd";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Router from "next/router";
import Footer from "../footer";
import { styled } from "linaria/lib/react";
import { Context } from "../../utils/AuthContext";
const Title = styled.div`
  background-color: #bdd3e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  const { user } = useContext(Context);
  const submithandler = () => {
    signOut(auth)
      .then(() => {
        Router.push("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <Title>
        <h1>Dashboard</h1>
      </Title>
      <Button type="primary" onClick={submithandler}>
        SignOut
      </Button>
      <Main>
        <div className="site-card-border-less-wrapper">
          <Card title="User" bordered={false} style={{ width: 300 }}>
            <p>Email:{user.UserImpl.email}</p>
            <p>Uid:{user.UserImpl.uid}</p>
          </Card>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
