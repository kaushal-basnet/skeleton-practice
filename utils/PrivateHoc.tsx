import React, { useState, useEffect, useContext } from "react";
import { Context } from "./AuthContext";
import Router from "next/router";
import { Spin } from "antd";
//private: not allowed to go in private location without signIn
const PrivateHoc = (AuthComponent) => {
  function PrivateComponent({ children }) {
    const { user, loading, setLoading } = useContext(Context);
    useEffect(() => {
      // console.log(user, "private");
      if (user === null) {
        Router.push("/login");
        return;
      }
      setLoading(false);
      // eslint-disable-next-line
    }, [user]);
    // console.log(token, "token");
    if (loading) {
      return (
        <Spin
          spinning={loading}
          tip="Loading..."
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "500px",
            fontSize: "30px",
          }}
        />
      );
    }
    return <>{children}</>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <PrivateComponent>
          <AuthComponent {...this.props} />
        </PrivateComponent>
      );
    }
  };
};

export default PrivateHoc;
