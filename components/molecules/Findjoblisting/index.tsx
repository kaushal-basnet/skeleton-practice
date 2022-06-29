import { Button } from "antd";
import { styled } from "linaria/lib/react";
import { CheckboxButton, RadioButton, SelectButton } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
  & h2 {
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
  & .buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
    /* ant design => margin-left: 8px; */
    & .ant-checkbox-wrapper {
      margin-left: 0px;
    }
  }
  & h3 {
    font-size: 12px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 8px;
    margin-top: 16px;
  }
  & .searchbutton {
    margin-top: 17px;
    & .search {
      height: 37px;
      width: 100%;
      background: #1a50ae;
      border-radius: 4px;
      color: #ffffff;
      font-size: 14px;
      &:hover {
        background: #6989c0;
      }
    }
  }
`;
const Findjoblisting = () => {
  return (
    <>
      <Container>
        <h2>求人情報を探す</h2>
        <h3>募集区分</h3>
        <div className="buttons">
          <RadioButton radio="すべて" />
          <RadioButton radio="リファラル営業" />
          <RadioButton radio="代理店、業務委託" />
        </div>
        <h3>募集区分</h3>
        <div className="buttons">
          <SelectButton select="指定なし" />
        </div>
        <h3>報酬条件</h3>
        <div className="buttons">
          <CheckboxButton checkbox="紹介受領" />
          <CheckboxButton checkbox="商談成立" />
          <CheckboxButton checkbox="受注" />
          <CheckboxButton checkbox="固定報酬あり" />
        </div>
        <h3>報酬</h3>
        <div className="buttons">
          <RadioButton radio="1万円未満" />
          <RadioButton radio="1万円以上～10万円未満" />
          <RadioButton radio="10万円以上～50万円未満" />
          <RadioButton radio="50万円以上～100万円未満" />
          <RadioButton radio="100万円以上" />
        </div>
        <div className="searchbutton">
          <Button className="search">検索</Button>
        </div>
      </Container>
    </>
  );
};
export { Findjoblisting };
