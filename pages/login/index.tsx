import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Divider, Input, message } from "antd";
import Emailinput from "../input";
import { styled } from "linaria/lib/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Router from "next/router";
import { Context } from "../../utils/AuthContext";
import RestrictedHoc from "../../utils/RestrictedHoc";
import PrivateHoc from "../../utils/PrivateHoc";

const Buttonwrapper = styled.div`
  background: #bdd3e7;
  width: calc(100% / 2);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  height: 95vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Register = styled.div`
  flex: 1;
  padding: 20px;
  & Button {
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
`;
const FormWrapper = styled.div`
  width: calc(100% / 2);

  display: flex;
  /* padding-top: 25px; */
  background-color: #bdd3e7;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding-top: 20px;
    /* align-items: flex-start; */
  }
  & form {
    width: 70%;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .formFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .login-form-button {
    border-radius: 4px;
    width: 180px;
    background: #275c96;
    color: #fff;
    margin: 10px 0px;
    height: 40px;
    font: 500;
  }
`;
const schema = yup.object({
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "minimum 6 character"),
});

const Login = () => {
  const { setUser } = useContext(Context);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        Router.push("/dashboard");
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        if (errorCode === "auth/user-not-found") {
          message.error("Please enter the valid Email");
        }
        if (errorCode === "auth/wrong-password") {
          message.error("Please enter the valid Password");
        } else if (errorCode === "auth/too-many-requests") {
          message.error("Too many attempts");
        }
      });
  };
  return (
    <>
      <Buttonwrapper>
        <Link href="/">
          <Button type="primary" icon={<ArrowLeftOutlined />}>
            Home
          </Button>
        </Link>
      </Buttonwrapper>
      <Container>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Emailinput
                  label="Email"
                  rest={field}
                  errors={errors.email?.message}
                />
              )}
            />
            <label htmlFor="email">Passsword</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <Input.Password {...field} />{" "}
                  <p style={{ color: "crimson" }}>{errors.password?.message}</p>
                </>
              )}
            />
            <div className="formFooter">
              <Button
                className="login-form-button"
                //   loading={mutation.isLoading}
                htmlType="submit"
              >
                Login
              </Button>

              <a>Forgot Password?</a>
            </div>
          </form>
        </FormWrapper>
        <Register>
          <div>
            <h3>Do not have account?</h3>
            <p>
              Register with us for a faster checkout, to track the status of
              your order and more.
            </p>
          </div>
          <Link href="/signup">
            <Button block>SignUp</Button>
          </Link>
          <Divider>OR</Divider>
          <div>
            <Button style={{ width: "100%" }}>
              <img
                src="/img/google.png"
                alt="google"
                style={{ height: "25px" }}
              />
              Login With Google
            </Button>
          </div>
        </Register>
      </Container>
    </>
  );
};

export default RestrictedHoc(Login);
