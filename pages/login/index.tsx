import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "antd";
import Emailinput from "../input";
import { styled } from "linaria/lib/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 25px;
  color: white;
  background-color: #10091c;
  justify-content: center;
  align-items: center;
  & form {
    width: 30%;
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
email:yup.string().required("Email is required").email("Invalid Email"),
password:yup
.string()
.required("password is required")
.min(6, "minimum 6 character"),
})

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
   resolver:yupResolver(schema),
  });
  const onSubmit = (data:any) => {
    console.log(data)
  };
  return (
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
  );
};

export default Login;
