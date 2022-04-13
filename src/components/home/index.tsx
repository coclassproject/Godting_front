import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdTune } from 'react-icons/md';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Filter from '../shared/Filter';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  span {
    display: inline-flex;
  }
`;

const CategoryContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: inline-flex;
`;

const IconContainer = styled.div`
  margin: -3px 8px 0px 10px;
`;

const CardContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
  justify-content: center;
`;

const CardSubContainer = styled.div`
  border-radius: 10px;
  width: 185px;
  height: 240px;
  float: left;
  margin: 6px;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 4.41%, rgba(3, 3, 3, 0.22) 100%);
`;
const CardButton = styled.button`
  position: absolute;
  width: 34px;
  height: 34px;
  left: 140px;
  bottom: 200px;
  border-radius: 100%;
  color: ${(props) => props.theme.LINE_WHITE_COLOR};
  background-color: white;
  border: 1px solid ${(props) => props.theme.LINE_WHITE_COLOR};
  cursor: pointer;
`;

const CardOld = styled.span`
  position: absolute;
  right: 135px;
  top: 180px;
  color: white;
`;
const CardHeight = styled.span`
  position: absolute;
  right: 120px;
  top: 200px;
  color: white;
`;

const RegisterContainer = styled.div`
  width: 400px;
  height: 300px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

const RegisterSubContainer = styled.div`
  width: 175px;
  height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const RegisterCard = styled.div`
  border-radius: 10px;
  width: 175px;
  height: 230px;
  float: left;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin: 6px;
`;
const RegisterImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgrey;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const RegisterNick = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: grey;
  text-align: center;
  vertical-align: middle;
  padding-top: 10px;
`;
const RegisterLecture = styled.span`
  font-size: 12px;
  color: grey;
  vertical-align: middle;
  text-align: center;
  padding: 10px 2px 3px 4px;
`;
const RegisterInfo = styled.span`
  font-size: 12px;
  color: lightgrey;
  vertical-align: middle;
  text-align: center;
  padding: 10px 2px 3px 4px;
`;
const Span = styled.div`
  margin-left: 30px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const HomeComponent = () => {
  const [open, setOpen] = useState(false);

  const openFilter = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <CategoryContainer>
          <span>서울</span>
          <IconContainer onClick={openFilter}>
            <MdTune size="1.3rem" />
          </IconContainer>
        </CategoryContainer>
      </Container>
      {open && <Filter />}
      <CardContainer>
        <CardSubContainer>
          <CardButton>
            <AiOutlineHeart size="20" />
          </CardButton>
          <CardOld> 23세</CardOld>
          <CardHeight> 162cm</CardHeight>
        </CardSubContainer>
        <CardSubContainer>
          <CardButton>
            <AiOutlineHeart size="20" />
          </CardButton>
          <CardOld> 23세</CardOld>
          <CardHeight> 162cm</CardHeight>
        </CardSubContainer>
        <CardSubContainer>
          <CardButton>
            <AiOutlineHeart size="20" />
          </CardButton>
          <CardOld> 23세</CardOld>
          <CardHeight> 162cm</CardHeight>
        </CardSubContainer>
        <CardSubContainer>
          <CardButton>
            <AiOutlineHeart size="20" />
          </CardButton>
          <CardOld> 23세</CardOld>
          <CardHeight> 162cm</CardHeight>
        </CardSubContainer>
      </CardContainer>
      <Span>#최근에 가입한 친구들</Span>
      <RegisterContainer>
        <main className="ExampleComponent">
          <div className="main-wrap">
            <Swiper
              modules={[Navigation, A11y]}
              slidesPerView={3}
              spaceBetween={180}
              initialSlide={1}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <RegisterCard>
                  <RegisterImg />
                  <RegisterSubContainer>
                    <RegisterNick>햄찌</RegisterNick>
                    <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
                    <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
                  </RegisterSubContainer>
                </RegisterCard>
              </SwiperSlide>
              <SwiperSlide>
                <RegisterCard>
                  <RegisterImg />
                  <RegisterSubContainer>
                    <RegisterNick>햄찌</RegisterNick>
                    <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
                    <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
                  </RegisterSubContainer>
                </RegisterCard>
              </SwiperSlide>
              <SwiperSlide>
                <RegisterCard>
                  <RegisterImg />
                  <RegisterSubContainer>
                    <RegisterNick>햄찌</RegisterNick>
                    <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
                    <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
                  </RegisterSubContainer>
                </RegisterCard>
              </SwiperSlide>
              <SwiperSlide>
                <RegisterCard>
                  <RegisterImg />
                  <RegisterSubContainer>
                    <RegisterNick>햄찌</RegisterNick>
                    <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
                    <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
                  </RegisterSubContainer>
                </RegisterCard>
              </SwiperSlide>
            </Swiper>
          </div>
        </main>
      </RegisterContainer>
    </>
  );
};

export default HomeComponent;
