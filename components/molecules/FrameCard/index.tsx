import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { styled } from "linaria/lib/react";
import React from "react";
import { Card } from "../../atoms";

const Container = styled.div`
  background-color: #ffffff;
  width: 776px;
  padding: 16px;
  @media (max-width: 1024px) {
    width: 100%;
  }

  & .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  & .seeMore {
    width: 90%;
    margin: 16px;
    border: 1px solid #1a50ae;
    border-radius: 4px;
    font-size: 16px;
    line-height: 150%;
    color: #1a50ae;
    &:hover {
      background-color: #1a50ae;
      color: #ffffff;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  & .mobileDisable {
    @media (max-width: 768px) {
      display: none;
    }
  }
  & h3 {
    margin-bottom: 13px;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
  & .headerRight {
    font-size: 14px;
    line-height: 150%;
    color: #333333;
    &:hover {
      color: 1890ff;
    }
    & .rightoutlined {
      color: #264270;
      font-size: 11px;
      /* font-weight: 800; */
      padding-left: 5px;
    }
  }
`;

interface Props {
  title: string;
  data: any[];
}
const FrameCard = ({ title, data }: Props) => {
  return (
    <Container>
      <Header>
        <h3> {title}</h3>
        <div className="mobileDisable">
          <a href="/" className="headerRight">
            もっと見る
            <span className="rightoutlined">
              <RightOutlined />
            </span>
          </a>
        </div>
      </Header>
      <div className="cards">
        {data?.map((elem, ind) => (
          <Card
            key={ind}
            image={elem.image}
            isFavorite={elem.isFavorite}
            jobTitle={elem.jobTitle}
            money={elem.money}
            companyName={elem.companyName}
            date={elem.date}
            periodofOperation={elem.periodofOperation}
            status={elem.status}
            crown={elem.crown}
          />
        ))}
        <></>
      </div>
      <Button className="seeMore">もっと見る</Button>
    </Container>
  );
};
export { FrameCard };
