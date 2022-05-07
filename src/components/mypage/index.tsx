import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
import { Container, SwiperDiv, Back } from './style';

const Mypage = () => (
  <>
    
    <Back>
    <Container>
        <div className="favorite">
          <span>소개팅 좋아요 한 목록</span>
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={3}
            spaceBetween={180}
            initialSlide={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <SwiperDiv />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </Back>
   
  </>
);

export default Mypage;
