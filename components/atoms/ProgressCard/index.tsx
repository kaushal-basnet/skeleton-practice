import { styled } from "linaria/lib/react";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  gap: 12px;
  padding-top: 17px;
  padding-bottom: 16px;
  align-items: center;
`;

const LeftDiv = styled.div`
  & .acheivedText {
    color: #418a26;
  }
  & .notAcheivedText {
    color: #df8f1d;
  }
  & p {
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    /* color: #df8f1d; */
    text-align: center;
    margin-top: 8px;
  }
`;
const RightDiv = styled.div`
  & .date {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #999999;
    margin-bottom: 4px;
  }

  & h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 4px;
    color: #333333;
  }
  & .desc {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #757575;
    margin-bottom: 0px;
  }
`;

const ProgressDiv = styled.div`
  height: 22px;
  width: 150px;
  background-color: #f2f2f2;
  border-radius: 30px;
  align-items: center;
  & .numberOfDeals {
    font-size: 12px;
  }
  & .acheived {
    background-color: #e7f9df;
    border-radius: 30px;
    & .acheivedText {
      color: #418a26;
    }
  }
  & .notAcheived {
    border-radius: 30px;
    background: linear-gradient(90deg, #fff5d1 50%, #f2f2f2 50%);
    & .notAcheivedText {
      color: #df8f1d;
    }
  }
`;

interface Props {
  date: string;
  title: string;
  desc: string;
  numberOfDeals: number;
}

const ProgressCard = ({ date, title, desc, numberOfDeals }: Props) => {
  return (
    <Container>
      <LeftDiv>
        <ProgressDiv>
          {/* <div className={`achieved ${active ? "notAchieved" : ""}`}>{children}</div> */}
          {numberOfDeals == 20 ? (
            <p className="acheived">
              <span className="acheivedText">{numberOfDeals}件</span>/20件
            </p>
          ) : (
            <p className="notAcheived">
              <span className="notAcheivedText">{numberOfDeals}件</span>/20件
            </p>
          )}
        </ProgressDiv>
        {numberOfDeals == 20 ? (
          <p className="acheivedText">達成</p>
        ) : (
          <p className="notAcheivedText">未達成</p>
        )}
      </LeftDiv>
      <RightDiv>
        <p className="date">{date}</p>
        <h4>{title}</h4>
        <p className="desc">{desc}</p>
      </RightDiv>
    </Container>
  );
};
export { ProgressCard };
