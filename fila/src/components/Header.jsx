import React from 'react';
import logo from '../assets/img/image7.svg';
import mailIcon from '../assets/img/mail.svg';
import cartIcon from '../assets/img/cart.svg';
import searchIcon from '../assets/img/search.svg';
import userIcon from '../assets/img/user.svg';

const Header = () => {
    const dropdownContent = (
        <div className="dropdown-menu">
            <div className="dropdown-column">
                <h3>New & Featured</h3>
                <ul>
                    <li>신상품</li>
                    <li>베스트</li>
                    <li>스타일</li>
                    <li>세일</li>
                    <li>STUNNING SUMMER</li>
                    <li>FILA WHITE LINE</li>
                    <li>24 NEW INTERUN</li>
                    <li>COLD WAVE T-SHIRTS</li>
                    <li>PROPLAYER COLLECTIONS</li>
                </ul>
            </div>
            <div className="dropdown-column">
                <h3>의류</h3>
                <ul>
                    <li>전체보기</li>
                    <li>버려입기/짐입</li>
                    <li>티셔츠</li>
                    <li>스커트/원피스</li>
                    <li>운동복</li>
                    <li>츄펜츠</li>
                    <li>브라탑/레깅스</li>
                    <li>맨투맨/후드티</li>
                    <li>테니스</li>
                    <li>워터스포츠</li>
                    <li>트레이닝 셋업</li>
                </ul>
            </div>
            <div className="dropdown-column">
                <h3>신발</h3>
                <ul>
                    <li>전체보기</li>
                    <li>라이프스타일</li>
                    <li>헤리티지</li>
                    <li>테니스</li>
                    <li>런닝</li>
                    <li>샌들/슬리퍼</li>
                    <li>인터런</li>
                    <li>레깅스가</li>
                    <li>에사패</li>
                </ul>
            </div>
            <div className="dropdown-column">
                <h3>용품</h3>
                <ul>
                    <li>전체보기</li>
                    <li>백팩</li>
                    <li>숄더 / 토트백</li>
                    <li>메신저 / 크로스백</li>
                    <li>슬링백 / 허쉘</li>
                    <li>모자</li>
                    <li>양말</li>
                    <li>테니스</li>
                    <li>기타</li>
                </ul>
            </div>
            <div className="dropdown-column">
                <h3>언더웨어</h3>
                <ul>
                    <li>전체보기</li>
                    <li>패키지</li>
                    <li>와이어브라</li>
                    <li>노와이어브라</li>
                    <li>데일리브라탑</li>
                    <li>스포츠브라탑</li>
                    <li>팬티</li>
                    <li>사각드로즈</li>
                    <li>이지웨어</li>
                    <li>파자마</li>
                </ul>
            </div>
            <div className="dropdown-column">
                <h3>스포츠</h3>
                <ul>
                    <li>테니스</li>
                    <li>러닝/트레이닝</li>
                </ul>
            </div>
        </div>
    );

    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/"><img src={logo} alt="FILA logo" /></a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li className="menu-item">
                            <a href="/women">WOMEN</a>
                            <div className="dropdown">
                                {dropdownContent}
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="/men">MEN</a>
                            <div className="dropdown">
                                {dropdownContent}
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="/kids">KIDS</a>
                            <div className="dropdown">
                                {dropdownContent}
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="/tennis">TENNIS</a>
                            <div className="dropdown">
                                {dropdownContent}
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="/brand">BRAND</a>
                            <div className="dropdown">
                                {dropdownContent}
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="header__icons">
                    <a href="/mail"><img src={mailIcon} alt="Mail" /></a>
                    <a href="/cart"><img src={cartIcon} alt="Cart" /></a>
                    <a href="/search"><img src={searchIcon} alt="Search" /></a>
                    <a href="/login"><img src={userIcon} alt="User" /></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
