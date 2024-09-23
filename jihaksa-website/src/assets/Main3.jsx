import React from 'react';

function Main3() {
  return (
    <section className="curriculum-section">
      {/* Curriculum Header and Subject Cards */}
      <div className="curriculum-wrapper">
        <div className="curriculum-header">
          <span className="badge">초등 4학년 교과서</span>
          <h2>한 단계 더 성장하는 아이들과 선생님</h2>
          <p>수업의 과정은 즐겁고, 성취는 보람찬 2022 개정 교육과정 교과서.<br />
            내용의 깊이는 더하고 과정은 즐겁게 구성한 지학사 교과서와 함께 새로운 수업을 경험해 보세요.</p>
        </div>

        <div className="subjects-grid">
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-suhak.png" alt="수학" />
            <p>수학</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-sahoi.png" alt="사회" />
            <p>사회</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-kwa.png" alt="과학" />
            <p>과학</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-eum.png" alt="음악" />
            <p>음악</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-misul.png" alt="미술" />
            <p>미술</p>
          </div>
          <div className="subject-card">
            <img src="https://textbook.jihak.co.kr/img/mtab-cheyook.png" alt="체육" />
            <p>체육</p>
          </div>
        </div>
      </div>

      {/* Book Covers Section */}
      <div className="book-covers-section">
        <div className="book-covers-grid">
          {/* First Row */}
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-suhak41-pr.png" alt="수학 4-1" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-suhak42-pr.png" alt="수학 4-2" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-sahoi41-pr.png" alt="사회 4-1" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-sahoi42-pr.png" alt="사회 4-2" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-kwa41-pr.png" alt="과학 4-1" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-kwa42-pr.png" alt="과학 4-2" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-eum41-pr.png" alt="음악 4" />
          </div>
          <div className="book-cover-card">
            <img src="https://textbook.jihak.co.kr/img/mthunb-misul41-pr.png" alt="미술 4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main3;
