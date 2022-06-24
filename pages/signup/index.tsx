import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, message } from "antd";
import Emailinput from "../input";
import { styled } from "linaria/lib/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import Router from "next/router";
import app, { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import RestrictedHoc from "../../utils/RestrictedHoc";

const Buttonwrapper = styled.div`
  background: #bdd3e7;
`;
const FormWrapper = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  padding-top: 25px;
  background-color: #bdd3e7;
  justify-content: center;
  align-items: center;

  & form {
    @media screen and (max-width: 768px) {
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
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords does not  match"),
});

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        Router.push("/dashboard");
        const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          message.error("Email already in use");
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
          <label htmlFor="email">Confirm Passsword</label>
          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field }) => (
              <>
                <Input.Password {...field} />{" "}
                <p style={{ color: "crimson" }}>
                  {errors.passwordConfirmation?.message}
                </p>
              </>
            )}
          />
          <div className="formFooter">
            <Button
              className="login-form-button"
              //   loading={mutation.isLoading}
              htmlType="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </FormWrapper>
    </>
  );
};

export default RestrictedHoc(Signup);
