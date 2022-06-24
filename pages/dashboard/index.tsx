import { Button, Card } from "antd";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Router from "next/router";
import Footer from "../footer";
import { styled } from "linaria/lib/react";
import { Context } from "../../utils/AuthContext";
import PrivateHoc from "../../utils/PrivateHoc";
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
  const { user, setUser } = useContext(Context);
  const submithandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
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
          <Card title="User" style={{ width: 500 }}>
            <p>
              <b>Email:</b> {user?.email}
            </p>
            <p>
              <b>Uid:</b> {user?.uid}
            </p>
          </Card>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default PrivateHoc(Dashboard);
