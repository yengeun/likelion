import React from 'react';

function Header() {
  return (
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
  );
}

export default Header;
