import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, message } from "antd";
import Emailinput from "../input";
import { styled } from "linaria/lib/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Buttonwrapper = styled.div`
  background: #bdd3e7;
  width: calc(100% / 2);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Register = styled.div`
  flex: 1;
  padding: 20px;
  & Button {
    margin-top: 200px;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
`;
const FormWrapper = styled.div`
  height: 100vh;
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
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        if (errorCode === "auth/wrong-password") {
          message.error("This is an error message");
        } else if (errorCode === "auth/too-many-requests") {
          message.error("plese wait");
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
            <h5>Do not have account?</h5>
            <p>
              Register with us for a faster checkout, to track the status of
              your order and more.
            </p>
          </div>
          <Link href="/signup">
            <Button block>SignUp</Button>
          </Link>
        </Register>
      </Container>
    </>
  );
};

export default Login;
