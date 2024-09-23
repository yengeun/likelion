import React from 'react';

function Main2() {
  return (
    <div className="main-content">
      <section className="curriculum-section">
        <div className="curriculum-header">
          <span className="badge">초등 3학년 교과서</span>
          <h2>선생님과 학생을 생각하는 지학사 교과서</h2>
          <p>
            가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.
            <br />
            항상 학교 현장을 고민하는 지학사 교과서가 그동안의 경험을 모아 더 나은 수업을 도와드립니다.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="subjects-grid">
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-cheyook.png" alt="체육 아이콘" />
            <p>체육</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-sahui.png" alt="사회 아이콘" />
            <p>사회</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-gwahak.png" alt="과학 아이콘" />
            <p>과학</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-eumak.png" alt="음악 아이콘" />
            <p>음악</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-misul.png" alt="미술 아이콘" />
            <p>미술</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-suhak.png" alt="수학 아이콘" />
            <p>수학</p>
          </div>
        </div>

        {/* Book Covers Grid with Shapes */}
        <div className="book-covers-grid">
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="수학 교과서" />
            <div className="overlay">자세히보기</div>
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="과학 교과서" />
            <div className="overlay">자세히보기</div>
          </div>
          <div className="shape shape-yellow"></div> {/* Example of yellow shape */}
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="사회 교과서" />
            <div className="overlay">자세히보기</div>
          </div>
          <div className="shape shape-grey"></div> {/* Example of grey shape */}
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="음악 교과서" />
            <div className="overlay">자세히보기</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main2;
