import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronRight } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { Container, SwiperDiv, Back, ButtonDiv, SubContainer, TestDiv } from './style';

const Mypage = () => (
  <>
    <Back>
      <SubContainer>
        <div className="wrap">
          <div className="content1">
            <div className="class">
              <span>18학번</span>
            </div>
            <span className="nick">닉네임닉네임닉네임</span>
            <span className="lecture">시각디자인학과</span>
          </div>
          <div className="content2">
            <div className="img">
              <div className="edit">
                <BiPencil className="icons" size="24px" />
              </div>
            </div>
          </div>
        </div>
      </SubContainer>
      <Container>
        <div className="favorite">
          <span className="subject">소개팅 좋아요 한 목록</span>
          <Swiper
            className="swiper"
            modules={[Navigation, A11y]}
            slidesPerView={3}
            spaceBetween={280}
            initialSlide={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <SwiperDiv>
                <div className="img" />
                <div className="content">
                  <span className="name">하연</span>
                  <span className="lecture">문화상품디자인연계학과</span>
                </div>
              </SwiperDiv>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperDiv>
                <div className="img" />
                <div className="content">
                  <span className="name">하연</span>
                  <span className="lecture">문화상품디자인연계학과</span>
                </div>
              </SwiperDiv>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperDiv>
                <div className="img" />
                <div className="content">
                  <span className="name">하연</span>
                  <span className="lecture">문화상품디자인연계학과</span>
                </div>
              </SwiperDiv>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperDiv>
                <div className="img" />
                <div className="content">
                  <span className="name">하연</span>
                  <span className="lecture">문화상품디자인연계학과</span>
                </div>
              </SwiperDiv>
            </SwiperSlide>
          </Swiper>
          <TestDiv>
            <div className="logout">
              로그아웃 <BsChevronRight className="icon" size="20px" />
            </div>
            <div className="resign">
              회원탈퇴 <BsChevronRight className="icon" size="20px" />
            </div>
          </TestDiv>
        </div>
      </Container>
    </Back>
  </>
);

export default Mypage;
