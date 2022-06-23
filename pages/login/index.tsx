import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "antd";
import Emailinput from "../input";
import { styled } from "linaria/lib/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Buttonwrapper = styled.div`
  background: #bdd3e7;
  width: calc(100% / 2);
`;
const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
const Register = styled.div`
  flex: 1;
  padding: 20px;
  & Button {
    margin-top: 200px;
  }
`;
const FormWrapper = styled.div`
  height: 100vh;
  width: calc(100% / 2);

  display: flex;
  padding-top: 25px;
  background-color: #bdd3e7;
  justify-content: center;
  align-items: center;
  & form {
    width: 70%;
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
    console.log(data);
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
