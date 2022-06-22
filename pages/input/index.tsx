import React from "react";
import { Input } from "antd";

interface Props {
  label: string;
}
const Emailinput = (props:any) => {
  return (
    <div>
      <label>{props.label}</label>
      <Input {...props.rest} />
      <p style={{color:"crimson"}}>{props.errors}</p>
    </div>
  );
};

export default Emailinput;