import React from 'react';

function Main3() {
  return (
    <div className="main-content">
      <section className="curriculum-section">
        <div className="curriculum-header">
          <span className="badge">초등 4학년 교과서</span>
          <h2>한 단계 더 성장하는 아이들과 선생님</h2>
          <p>
            수업의 자율은 존중하고, 학습은 보장한 2022 개정 교육과정 교과서.
            <br />
            내일을 준비하는 더 많은 자료와 새로운 수업을 경험해 보세요.
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

        {/* Book Covers Grid */}
        <div className="book-covers-grid">
          <img src="https://textbook.jihak.co.kr/img/science-textbook.png" alt="과학 교과서" />
          <img src="https://textbook.jihak.co.kr/img/math-textbook.png" alt="수학 교과서" />
          <img src="https://textbook.jihak.co.kr/img/music-textbook.png" alt="음악 교과서" />
          <img src="https://textbook.jihak.co.kr/img/art-textbook.png" alt="미술 교과서" />
          <img src="https://textbook.jihak.co.kr/img/pe-textbook.png" alt="체육 교과서" />
        </div>
      </section>
    </div>
  );
}

export default Main3;
