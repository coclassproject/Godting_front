import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Back, ButtonDiv, Container, SubContainer, SwiperDiv } from './style';

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
          <Swiper className="swiper" spaceBetween={130} slidesPerView={2} slidesOffsetAfter={100}>
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
          <ButtonDiv>
            <div className="logout">
              로그아웃 <BsChevronRight className="icon" size="20px" />
            </div>
            <div className="resign">
              회원탈퇴 <BsChevronRight className="icon" size="20px" />
            </div>
          </ButtonDiv>
        </div>
      </Container>
    </Back>
  </>
);

export default Mypage;
