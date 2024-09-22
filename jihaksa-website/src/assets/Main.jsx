import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Main({ handleCopyLink }) {
  return (
    <div className="main-content">
      {/* Event Section */}
      <section className="event-section">
        <h1>2022 개정 교육과정 교과서</h1>
        <p>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
        <div className="event-card">
          <h2>EVENT</h2>
          <p>2022 개정 지학사 교과서를 응원해 주세요! <br /> 응원 이벤트 🍀</p>
          <img
            src="https://textbook.jihak.co.kr/img/n-pay.png"
            alt="네이버 페이 이벤트 이미지"
            className="event-image"
          />
        </div>
      </section>

      {/* Swiper Section */}
      <section className="banner-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg1.png"
                alt="배너 이미지 1"
                className="banner-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg2.png"
                alt="배너 이미지 2"
                className="banner-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg3.png"
                alt="배너 이미지 3"
                className="banner-image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Copy Link Icon */}
      <div className="copy-link-icon" onClick={handleCopyLink}>
        <img
          src="https://textbook.jihak.co.kr/img/as-link.svg"
          alt="링크 복사 아이콘"
          className="link-icon"
        />
      </div>
    </div>
  );
}

export default Main;
