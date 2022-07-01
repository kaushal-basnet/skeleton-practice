import { styled } from "linaria/lib/react";
import React from "react";
const Container = styled.div`
  display: flex;
  border-top: 1px solid #e8e8e8;
  padding-top: 24px;
  padding-bottom: 195px;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin: auto;
  margin-top: 162px;
  flex-direction: column;
  @media (max-width: 1050px) {
    width: 100%;
    padding: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    border-top: 0px;
  }
  & p {
    font-size: 12px;
    line-height: 14px;
  }
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
  & .contents {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-left: 1px solid #e8e8e8;
    @media (max-width: 768px) {
      border-bottom: 1px solid #e8e8e8;
      border-left: 0px;
    }
    & a {
      padding-left: 16px;
      font-size: 14px;
      line-height: 150%;
      color: #333333;
    }
  }
  & > div:first-child {
    border-left: none;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Main>
        <div className="contents">
          <a src="/" alt="footerlink">
            ホーム
          </a>
          <a src="/" alt="footerlink">
            求人情報を探す
          </a>
        </div>
        {/* 2nd */}
        <div className="contents">
          <a src="/" alt="footerlink">
            会員規約
          </a>
          <a src="/" alt="footerlink">
            プライバシーポリシー
          </a>
          <a src="/" alt="footerlink">
            よくある質問
          </a>
        </div>
        {/*  3rd*/}
        <div className="contents">
          <a src="/" alt="footerlink">
            掲載について
          </a>
          <a src="/" alt="footerlink">
            お問い合わせ
          </a>
        </div>
        {/*  4th*/}
        <div className="contents">
          <a src="/" alt="footerlink">
            運営会社
          </a>
          <a src="/" alt="footerlink">
            営業シーク
          </a>
          <a src="/" alt="footerlink">
            営業グログ
          </a>
        </div>
      </Main>

      <p>Copyright（C）WEBX Inc. All Rights Reserved.</p>
    </Container>
  );
};
export { Footer };
