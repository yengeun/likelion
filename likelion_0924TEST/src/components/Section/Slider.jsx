import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';  // Swiper 기본 CSS
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../assets/scss/section/_section.scss'

// 이미지 경로를 설정합니다.
import slider01 from '../../assets/img/png/slider01.png'
import slider02 from '../../assets/img/png/slider02.png'
import slider03 from '../../assets/img/png/slider03.png'
import slider04 from '../../assets/img/png/slider04.png'

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}  // 슬라이드 간격
            slidesPerView={1}   // 한 번에 표시할 슬라이드 개수
            pagination={{ clickable: true }}  // 페이지 네이션 추가
            navigation  // 네비게이션 버튼 활성화
            loop={true}  // 슬라이드 반복
        >
            <SwiperSlide>
                <img src={slider01} alt="Slider 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider02} alt="Slider 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider03} alt="Slider 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider04} alt="Slider 4" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider