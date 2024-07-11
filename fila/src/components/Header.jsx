import React from 'react';
import '../assets/css/style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="#">
                        <img src="../img/image7.svg" alt="FILA" />
                    </a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li className="menu-item">
                            <a href="#">WOMEN</a>
                            <div className="dropdown">
                                {/* 드롭다운 내용 */}
                                <ul className="dropdown-menu">
                                    <li>
                                        <h3>New & Featured</h3>
                                        <ul>
                                            <li>신상품</li>
                                            <li>베스트</li>
                                            <li>스타일</li>
                                            <li>세일</li>
                                            <li>STUNNING SUMMER</li>
                                            <li>FILA WHITE LINE</li>
                                            <li>24 NEW 인터런</li>
                                            <li>COLD WAVE T-SHIRTS</li>
                                            <li>PROPLAYER COLLECTIONS</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>의류</h3>
                                        <ul>
                                            <li>긴팔티셔츠</li>
                                            <li>반팔/민소매티셔츠</li>
                                            <li>테니스</li>
                                            <li>스커트/치마바지</li>
                                            <li>운동화</li>
                                            <li>후드/집업</li>
                                            <li>바지/트레이닝바지</li>
                                            <li>원피스/투피스</li>
                                            <li>베스트/조끼</li>
                                            <li>트레이닝 세트</li>
                                            <li>도매상</li>
                                        </ul>
                                    </li>
                                    {/* 추가 카테고리 */}
                                </ul>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">MEN</a>
                            {/* 동일한 드롭다운 구조 */}
                        </li>
                        <li className="menu-item">
                            <a href="#">KIDS</a>
                            {/* 동일한 드롭다운 구조 */}
                        </li>
                        <li className="menu-item">
                            <a href="#">TENNIS</a>
                            {/* 동일한 드롭다운 구조 */}
                        </li>
                        <li className="menu-item">
                            <a href="#">BRAND</a>
                            {/* 동일한 드롭다운 구조 */}
                        </li>
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="#">로그인</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
