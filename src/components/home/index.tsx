import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdTune } from 'react-icons/md';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  CardContainer,
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
import Filter from './filter';
import CustomModal from '../shared/modal';

interface HomeComponentProps {
  setNoMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeComponent = ({ setNoMenu }: HomeComponentProps) => {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
        <CardSubContainer onClick={() => setModalIsOpen(true)}>
          <div className="wrap">
            <div className="content1">
              <button className="heart">
                <AiOutlineHeart className="icon" size="20" />
              </button>
            </div>
            <div className="content2">
              <span className="old"> 23세</span>
              <span className="height"> 162cm</span>
            </div>
          </div>
        </CardSubContainer>
        <CardSubContainer onClick={() => setModalIsOpen(true)}>
          <div className="wrap">
            <div className="content1">
              <button className="heart">
                <AiOutlineHeart className="icon" size="20" />
              </button>
            </div>
            <div className="content2">
              <span className="old"> 23세</span>
              <span className="height"> 162cm</span>
            </div>
          </div>
        </CardSubContainer>
        <CardSubContainer onClick={() => setModalIsOpen(true)}>
          <div className="wrap">
            <div className="content1">
              <button className="heart">
                <AiOutlineHeart className="icon" size="20" />
              </button>
            </div>
            <div className="content2">
              <span className="old"> 23세</span>
              <span className="height"> 162cm</span>
            </div>
          </div>
        </CardSubContainer>
        <CardSubContainer onClick={() => setModalIsOpen(true)}>
          <div className="wrap">
            <div className="content1">
              <button className="heart">
                <AiOutlineHeart className="icon" size="20" />
              </button>
            </div>
            <div className="content2">
              <span className="old"> 23세</span>
              <span className="height"> 162cm</span>
            </div>
          </div>
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
      <CustomModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} type="소개팅" />
    </>
  );
};

export default HomeComponent;
