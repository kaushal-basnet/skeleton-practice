import React from "react";
import { Radio } from "antd";
interface Props {
  radio: any;
}
const RadioButton = ({ radio }: Props) => {
  return (
    <>
      <Radio>{radio}</Radio>
    </>
  );
};
export { RadioButton };
