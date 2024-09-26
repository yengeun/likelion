import React from 'react'
import Slider from './Section/Slider'
import '../assets/scss/section/_main.scss';
import introduceImage from '../assets/img/png/introduce.png'

const Main = () => {
    // 공지사항 목록
    const notices = [
        "[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전 안내",
        "2024학년도 동계 단기연수 프로그램 설명회 개최 안내",
        "[연산지원팀] 2024학년도 동계 학부생 연구 참여 프로그램 안내",
        "[교양 교학팀] 2024-2 글로벌라운지 운영 안내",
        "2024학년도 2학기 제1차 성신 모의토익 접수 및 시행",
        "[대학혁신(2024)]2024학년도 동계학기 글로벌 인턴십 프로그램 안내",
        "2024학년도 2학기 수강철회 시행 안내"
    ];

    return (
        <div className="main-container">
            <Slider />

            {/* 공지사항 섹션 */}
            <section className="notice-section">
                <h2>공지사항</h2>
                <ul className="notice-list">
                    {notices.map((notice, index) => (
                        <li key={index} className="notice-item">
                            <a href="#">{notice}</a>
                        </li>
                    ))}
                </ul>
            </section>

             {/* 홍보영상 섹션 */}
             <section className="promo-section">
                <div className="promo-image-container">
                    <img src={introduceImage} alt="성신여자대학교 홍보영상" className="promo-image" />
                </div>
            </section>
        </div>
    );
};

export default Main