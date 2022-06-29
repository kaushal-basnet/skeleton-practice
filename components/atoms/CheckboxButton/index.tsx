import { Checkbox } from "antd";
import React from "react";
interface Props{
  checkbox:any;
}
const CheckboxButton = ({ checkbox }:Props) => {
  const onChange = () => {};
  return (
    <>
      <Checkbox onChange={onChange}>{checkbox}</Checkbox>
    </>
  );
};
export { CheckboxButton };
