import { styled } from "linaria/lib/react";
import { ProgressCard } from "../../atoms";

const Main = styled.div``;
const Text = styled.h1`
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
      <Main>
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
      </Main>
    </>
  );
};
export { Progress };
