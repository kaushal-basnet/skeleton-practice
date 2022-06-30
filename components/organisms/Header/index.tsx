import {
  HeartFilled,
  MenuOutlined,
  MessageFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { styled } from "linaria/lib/react";
import Link from "next/link";
import React from "react";

const HeaderItem = styled.div`
  padding: 24px 154px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1270px) {
    padding: 24px 50px;
  }
  @media (min-width: 768px) and (max-width: 1070px) {
    padding: 24px 15px;
  }
  @media (max-width: 768px) {
    padding: 17px 20px;
    /* gap: 20px; */
  }
`;
const HeaderItemLeft = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 36px;
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 120px;
      margin-right: 16px;
    }
  }
  & .leftNavlink {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const NavLink = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 18px;
  }
  & .mobileDisable {
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  & a {
    color: black;
    font-size: 16px;
    &:hover {
      color: #264270;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .ant-scroll-number {
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
      height: 15px;
      min-width: 15px;
      width: 16px;
    }
  }
  & .mobileEnable {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  & .icon {
    color: #264270;
    /* height: 20px; */
    font-size: 24px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 18px;
    }
  }
`;

const HeaderItemRight = styled.div`
  display: flex;
  align-items: center;
  & .profilePic {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin-left: 8px;
    @media (min-width: 768px) and (max-width: 1024px) {
      height: 24px;
      width: 24px;
      /* gap: 16px; */
    }
  }
  & .user {
    display: flex;
  }
  & .goldmedal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  & .userinfo {
    display: flex;
    align-items: center;
    gap: 4px;
    & img {
      width: 18px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderItem>
        <HeaderItemLeft>
          <div>
            <a href="/">
              <img src="/img/logo.svg" alt="logo" />
            </a>
          </div>

          <NavLink className="leftNavlink">
            <a href="/">求人検索</a>

            <a href="/">エントリー</a>

            <a href="/">リファラル管理</a>

            <a href="/">スカウト</a>

            <a href="/">会員サポート</a>
          </NavLink>
        </HeaderItemLeft>
        <HeaderItemRight>
          <NavLink>
            <a href="/">
              <span>
                <SearchOutlined className="icon mobileEnable" />
              </span>
            </a>
            <a href="/" className=" mobileDisable">
              <span>
                <HeartFilled className="icon" />
              </span>
            </a>

            <a href="/">
              <Badge count={1}>
                <span>
                  <MessageFilled className="icon" />
                </span>
              </Badge>
            </a>
            <a href="/">
              <span>
                <MenuOutlined className="icon mobileEnable" />
              </span>
            </a>
            <div className="user mobileDisable">
              <div className="goldmedal">
                <a href="/">山田 太郎</a>
                <div className="userinfo">
                  <img src="/img/gold.png" alt="pp" />
                  <a href="/" style={{ color: "#B69B12", fontWeight: "600" }}>
                    ゴールド
                  </a>
                </div>
              </div>

              <a href="/">
                <img src="/img/mustang.jpg" alt="pp" className="profilePic" />
              </a>
            </div>
          </NavLink>
        </HeaderItemRight>
      </HeaderItem>
    </>
  );
};

export { Header };
