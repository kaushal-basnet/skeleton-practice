import { Button } from "antd";
import React from "react";
import app from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
  const submithandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        <h1>Sign-out successful.</h1>;
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div>
        <h2>You are logged in</h2>
      </div>
      <h1>Dashboard</h1>
      <Button onClick={submithandler}>SignOut</Button>
    </>
  );
};

export default Dashboard;
