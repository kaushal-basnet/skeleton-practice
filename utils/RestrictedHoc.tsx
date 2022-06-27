import React, { useEffect, useContext } from "react";
import { Context } from "./AuthContext";
import { useRouter } from "next/router";
import { Spin } from "antd";

//Resticted: Restricted to go in signIn without signOut

const RestrictedHoc = (AuthComponent) => {
  function ProtectedComponent({ children }) {
    const router = useRouter();
    const { user, loading, setLoading } = useContext(Context);

    useEffect(() => {
      // console.log(user, "restricted");
      if (user !== null) {
        router.push("/dashboard");
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
        <ProtectedComponent>
          <AuthComponent {...this.props} />
        </ProtectedComponent>
      );
    }
  };
};

export default RestrictedHoc;
