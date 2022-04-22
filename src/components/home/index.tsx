import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdTune } from 'react-icons/md';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Filter from '../shared/Filter';
import {
  CardButton,
  CardContainer,
  CardHeight,
  CardOld,
  CardSubContainer,
  CategoryContainer,
  Container,
  IconContainer,
  RegisterCard,
  RegisterContainer,
  RegisterImg,
  RegisterInfo,
  RegisterLecture,
  RegisterNick,
  RegisterSubContainer,
  Span,
} from './style';

interface HomeComponentProps {
  setNoMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeComponent = ({ setNoMenu }: HomeComponentProps) => {
  const [open, setOpen] = useState(false);
  const filterRef = useRef(null);

  const openFilter = () => {
    setOpen(true);
    setNoMenu(true);
  };

  // const handleClickOutside = ({ target }) => {
  //   if (open && !filterRef.current?.contains(target)) {
  //     setOpen(false);
  //     setNoMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside);
  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, [open]);

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
      {open && <Filter ref={filterRef} setOpen={setOpen} setNoMenu={setNoMenu} />}
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
