import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Autoplay 모듈 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css'; // 메인 스타일


function App() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href); // 현재 페이지 URL을 복사
    alert('URL이 복사되었습니다!');
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <img
            src="https://textbook.jihak.co.kr/img/logo.svg"
            alt="지학사 로고"
            className="logo-image"
          />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#grade3">초등 3학년 교과서</a></li>
            <li><a href="#grade4">초등 4학년 교과서</a></li>
            <li><a href="#tsolution">티솔루션</a></li>
            <li><a href="#event">이벤트 <span className="event-badge">EVENT</span></a></li>
          </ul>
        </nav>
      </header>
      {/* 메인 배너 및 이벤트 섹션 */}
      <div className="main-content">
        <section className="event-section">
          <h1>2022 개정 교육과정 교과서</h1>
          <p>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
          <div className="event-card">
            <h2>EVENT</h2>
            <p>2022 개정 지학사 교과서를 응원해 주세요! <br /> 응원 이벤트 🍀</p>
            <img
              src="https://textbook.jihak.co.kr/img/n-pay.png" // 예시 이미지
              alt="네이버 페이 이벤트 이미지"
              className="event-image"
            />
          </div>
        </section>

      {/* Swiper 슬라이더 */}
      <section className="banner-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 1000, // 1초마다 슬라이드 전환
            disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 자동 전환 유지
          }}
          modules={[Navigation, Pagination, Autoplay]} // Autoplay 모듈 추가
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
    </div>

      {/* 링크 복사 아이콘 */}
      <div className="copy-link-icon" onClick={handleCopyLink}>
        <img
          src="https://textbook.jihak.co.kr/img/as-link.svg"
          alt="링크 복사 아이콘"
          className="link-icon"
        />
      </div>
          {/* 푸터 */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://textbook.jihak.co.kr/img/logo-wh.svg"  /* 요청하신 푸터 로고 */
              alt="지학사 푸터 로고"
              className="footer-logo-image"
            />
          </div>
          <div className="footer-text">
            <p>서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452</p>
            <p>통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR</p>
            <p>대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002</p>
            <p>COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED.</p>
            <p>(주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;