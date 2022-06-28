import { HeartFilled, MessageFilled } from "@ant-design/icons";
import { Badge } from "antd";
import { styled } from "linaria/lib/react";
import Link from "next/link";
import React from "react";

const HeaderItem = styled.div`
  padding: 24px 154px;
  display: flex;
  justify-content: space-between;

`;
const HeaderItemLeft = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 36px;
  }
`;
const NavLink = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  & a {
    color: black;
    font-size: 16px;
    &:hover {
      color: #264270;
    }
  }
  & .icon {
    color: #264270;
    /* height: 20px; */
    font-size: 24px;
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

          <NavLink>
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
            <div className="user">
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
