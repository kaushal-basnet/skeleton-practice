import { styled } from "linaria/lib/react";
import { ProgressCard } from "../../atoms";

const Container = styled.div`
  background-color: #ffffff;
  width: 776px;
  padding: 16px;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Text = styled.h2`
  margin-bottom: 13px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;

const Progress = () => {
  const DATA = [
    {
      title: "データ復旧サービス（HDD、NAS、Serverなど）",
      desc: "会社名会社名会社名",
      date: "2021/10/10",
      numberOfDeals: 10,
    },
    {
      title: "データ復旧サービス（HDD、NAS、Serverなど）",
      desc: "会社名会社名会社名",
      date: "2021/10/10",
      numberOfDeals: 20,
    },
  ];
  return (
    <>
      <Container>
        <Text>進捗状況</Text>
        {DATA.map((progressData, index) => (
          <ProgressCard
            key={index}
            title={progressData.title}
            date={progressData.date}
            desc={progressData.desc}
            numberOfDeals={progressData.numberOfDeals}
          />
        ))}
      </Container>
    </>
  );
};
export { Progress };
