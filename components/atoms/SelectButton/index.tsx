import React from "react";
import { Select } from "antd";
interface Props {
  select: any;
}
const SelectButton = ({ select }: Props) => {
  const { Option } = Select;
  const onChange = () => {};
  return (
    <>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={onChange} disabled>
        <Option value="lucy" >{select}</Option>
      </Select>
    </>
  );
};
export { SelectButton };
