import { styled } from "linaria/lib/react";
import React from "react";
import { Findjoblisting, Progress, FrameCard } from "../../molecules";

const MainContent = styled.div`
  display: flex;
  gap: 24px;
  width: 1000px;
  margin: auto;
  @media (max-width:1024px) {
    padding : 0px 20px;
    width : 100%;
  }
    @media (max-width: 768px) {
padding: 0px;
  }
`;
const LeftContent = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  min-width: 200px;
  padding: 16px;
  height: fit-content;
    @media (max-width: 768px) {
    display: none;
  }
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
   @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Frame = () => {
  const Title = [
    {
      title: "エントリー状況",
       data: [
    {
      image: "/img/card_image1.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      date: "エントリー日:2021/02/12",
      periodofOperation: "稼働期間： 2021/10/10~2021/11/9",
      isFavorite: false,
      

    },
    {
      image: "/img/card_image2.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      date: "エントリー日:2021/02/12",
      periodofOperation: "稼働期間： 2021/10/10~2021/11/9",
      isFavorite: true,
    

    },
  ]
  // 2nd row
    },
    {
      title: "スカウト",
      data:[
         {
      image: "/img/card_image1.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: false,
      status:"unAnswered"

    },
    {
      image: "/img/card_image2.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: true,
      status:"entry",

    },
    {
      image: "/img/card_image2.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
       isFavorite: true,
       status:"notInterested",
    },
      ]
    },
    // 3rd row
    {
      title: "新着",
      data:[
         {
      image: "/img/card_image1.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: false,
      

    },
    {
      image: "/img/card_image2.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: true,
    

    },
      ]
    },
    // 4th row
    {
      title: "ランキング",
      data:[
                 {
      image: "/img/card_image1.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: false,
      crown: "1",
      

    },
    {
      image: "/img/card_image2.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: true,
      crown: "2",
    

    },       
    {
      image: "/img/card_image3.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: false,
      crown: "3",
      
    },
    {
      image: "/img/card_image4.png",
      jobTitle: "最大３０文字最大３０文字最大３０文字最大３０文...",
      money: "1万円未満",
      companyName: "会社名会社名会社名",
      isFavorite: false,
      crown: "4",
    

    },
      ]
    },
  ];
  return (
    <MainContent>
      <LeftContent>
        <Findjoblisting />
      </LeftContent>
      <RightContent>
        <>
          <Progress />
          {/* <Card /> */}
          {Title.map((elem, ind) => (
            <FrameCard key={ind} title={elem.title} data={elem.data} />
          ))}
        </>
      </RightContent>
    </MainContent>
  );
};
export { Frame };
