import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Main2 = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease',
          once: true,
        });
      }, []);

    return (
        <section className='book_container'>
            {/* First Section: Subjects */}
            <div className="book_sec1" data-aos="fade-up">
                <div className="booK_sec1_txt">
                    <span className='book_sec1_txt_badge'>초등 3학년 교과서</span>
                    <h2 className='book_sec1_txt_title'>
                        선생님과 학생을 생각하는
                        <br />
                        지학사 교과서
                    </h2>
                    <p className="book_sec1_txt_sub">
                        가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.
                        <br />
                        항상 학교 현장을 고민하는 지학사 교과서가
                        <br />
                        그동안의 경험을 모아 더 나은 수업을 도와드립니다.
                    </p>
                </div>

                {/* Subjects Grid */}
                <ul className="subjects-grid">
                    <li className="subject-card">
                        <img src="https://textbook.jihak.co.kr/img/mtab-suhak.png" alt="수학" />
                        <p>수학</p>
                    </li>
                    <li className="subject-card">
                        <img src="https://textbook.jihak.co.kr/img/mtab-sahoi.png" alt="사회" />
                        <p>사회</p>
                    </li>
                    <li className="subject-card">
                        <img src="https://textbook.jihak.co.kr/img/mtab-kwa.png" alt="과학" />
                        <p>과학</p>
                    </li>
                    <li className="subject-card">
                        <img src="https://textbook.jihak.co.kr/img/mtab-eum.png" alt="음악" />
                        <p>음악</p>
                    </li>
                    <li className="subject-card">
                        <img src="https://textbook.jihak.co.kr/img/mtab-misul.png" alt="미술" />
                        <p>미술</p>
                    </li>
                    <li className="subject-card">
                        <img src="https://textbook.jihak.co.kr/img/mtab-cheyook.png" alt="체육" />
                        <p>체육</p>
                    </li>
                </ul>
            </div>

            {/* Book Covers Section */}
            <div className="book-covers-section">
                <div className="book-covers-grid">
                    {/* First Row */}
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-suhak31-pr.png" alt="수학 3-1" />
                    </div>
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="수학 3-2" />
                    </div>
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-sahoi31-pr.png" alt="사회 3-1" />
                    </div>

                    {/* Second Row */}
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-sahoi32-pr.png" alt="사회 3-2" />
                    </div>
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-kwa31-pr.png" alt="과학 3-1" />
                    </div>
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-kwa32-pr.png" alt="과학 3-2" />
                    </div>
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-eum31-pr.png" alt="음악 3" />
                    </div>
                    <div className="book-cover-card">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-misul31-pr.png" alt="미술 3" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main2;
