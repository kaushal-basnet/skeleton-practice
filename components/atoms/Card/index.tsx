import { HeartFilled } from "@ant-design/icons";
import { styled } from "linaria/lib/react";
import React, { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 174px;
  @media (max-width: 375px) {
    width: 100%;
  }

  & .profileImage {
    position: relative;
    @media (max-width: 375px) {
      width: 100%;
    }
    & img {
      border: 1px solid rgba(0, 0, 0, 0.08);
      @media (max-width: 375px) {
        width: 100%;
      }
    }
    & .favorite {
      height: 32px;
      width: 32px;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: -2px;
      left: 150px;
      & .icon {
        color: #1a50ae;
      }
    }
  }
  & .ReferralSales {
    font-size: 12px;
    line-height: 150%;
    color: #1aaeae;
    border: 1px solid #1aaeae;
    border-radius: 40px;
    width: 108px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
  & h3 {
    font-size: 14px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 0px;
  }
  & .period {
    font-size: 12px;
    line-height: 150%;
    color: #757575;
    margin-bottom: 0px;
  }
  & .date {
    font-size: 12px;
    line-height: 150%;
    color: #999999;
    margin-bottom: 0px;
  }

  & .money_company {
    display: flex;
    gap: 4px;
    height: 21px;
    & .moneyText {
      font-size: 14px;
      line-height: 150%;
      color: #333333;
    }
    & .companyText {
      font-size: 12px;
      line-height: 150%;
      color: #757575;
    }
  }
`;
const Status = styled.div`
  height: 22px;
  font-size: 12px;
  & .unAnswered {
    background: #fff2e8;
    border: 1px solid #ffbb96;
    border-radius: 2px;
    color: #fa541c;
  }
  & .entry {
    color: #1890ff;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 2px;
  }
  & .notInterested {
    color: #262626;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }
`;
const Crown = styled.div`
  display: flex;
  padding: 0px;
  width: 59px;
  height: 24px;
  & .crowns {
    display: flex;
    gap: 4px;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    & img {
      border: none;
    }
  }
`;
interface Props {
  image: string;
  jobTitle: string;
  money: string;
  companyName: string;
  date: string;
  periodofOperation: string;
  isFavorite: boolean;
  status: string;
  crown: string;
}
const Card = ({
  image,
  jobTitle,
  money,
  companyName,
  date,
  periodofOperation,
  isFavorite,
  status,
  crown,
}: Props) => {
  const [favorite, setfavorite] = useState(isFavorite);
  return (
    <>
      <Container>
        <div className="profileImage">
          <Crown>
            {crown === "1" ? (
              <div className="crowns">
                {/* eslint-disable @next/next/no-img-element  */}
                <img src="/img/crown1.png" className="crown1" />
                <p>No.1</p>
              </div>
            ) : crown === "2" ? (
              <div className="crowns">
                <img src="/img/crown2.png" className="crown2" />
                <p>No.2</p>
              </div>
            ) : crown === "3" ? (
              <div className="crowns">
                <img src="/img/crown3.png" className="crown3" />
                <p>No.3</p>
              </div>
            ) : crown === "4" ? (
              <div className="crowns">
                <img src="/img/crown4.png" className="crown4" />
                <p>No.4</p>
              </div>
            ) : null}
          </Crown>
          {/* image part */}
          {/* eslint-disable @next/next/no-img-element  */}
          <img src={image} alt="profile" />
          <div className="favorite" onClick={() => setfavorite(!favorite)}>
            {favorite ? (
              <HeartFilled className="icon" />
            ) : (
              <img
                src="/img/Favorite_add.png"
                alt="Favorite_add"
                className="icon"
              />
            )}
          </div>
        </div>
        <p className="ReferralSales">リファラル営業</p>
        <h3>{jobTitle}</h3>
        <p className="period">{periodofOperation}</p>

        <div className="money_company">
          <img src="/img/money.png" alt="money" />
          <p className="moneyText">{money}</p>
        </div>
        <div className="money_company">
          <img src="/img/company.png" alt="company" />
          <p className="companyText">{companyName}</p>
        </div>

        <p className="date">{date}</p>
        <Status>
          {status === "unAnswered" ? (
            <button className="unAnswered">未回答</button>
          ) : status === "entry" ? (
            <button className="entry">エントリー</button>
          ) : status === "notInterested" ? (
            <button className="notInterested">興味ない</button>
          ) : null}
        </Status>
      </Container>
    </>
  );
};
export { Card };
