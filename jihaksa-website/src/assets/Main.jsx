import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Main({ handleCopyLink }) {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="event-section">
        <div className="text-section">
          <h1>2022 개정 교육과정 교과서</h1>
          <p>
            <strong>EVENT</strong><br />
            지학사 교과서가 수업에 필요한 모든 것을 지원합니다.<br />
            2022 개정 지학사 교과서를 응원해 주세요!<br />
            응원 이벤트 🍀
          </p>
        </div>
        {/* Swiper for Event Section */}
        <div className="event-card">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds per slide
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img
                src="https://textbook.jihak.co.kr/img/mpr-slimg2.png"
                alt="Event Slide 1"
                className="event-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://textbook.jihak.co.kr/img/mpr-slimg3.png"
                alt="Event Slide 2"
                className="event-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://textbook.jihak.co.kr/img/mpr-slimg4.png"
                alt="Event Slide 3"
                className="event-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Banner Section with SwiperSlider */}
      <section className="banner-section">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg1.png"
                alt="과학 교과서 이미지"
                className="banner-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg2.png"
                alt="수학 교과서 이미지"
                className="banner-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg3.png"
                alt="수학 교과서 이미지"
                className="banner-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="https://textbook.jihak.co.kr/img/bg_mvsimg4.png"
                alt="수학 교과서 이미지"
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
