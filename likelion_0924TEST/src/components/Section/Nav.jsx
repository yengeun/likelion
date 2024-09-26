import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../assets/scss/section/_section.scss'

import homeIcon from '../../assets/img/icon/home.svg';
import homeFullIcon from '../../assets/img/icon/homefull.svg';
import likeIcon from '../../assets/img/icon/like.svg';
import likeFullIcon from '../../assets/img/icon/likefull.svg';
import searchIcon from '../../assets/img/icon/search.svg';
import searchFullIcon from '../../assets/img/icon/searchfull.svg';
import myPageIcon from '../../assets/img/icon/mypage.svg';
import myPageFullIcon from '../../assets/img/icon/mypagefull.svg';

const Nav = () => {
    const location = useLocation(); // 현재 경로 가져오기

    return (
        <nav className="nav">
            <Link to="/" className="nav-item">
                <img 
                    src={location.pathname === "/" ? homeFullIcon : homeIcon} 
                    alt="Home" 
                />
            </Link>
            <Link to="/like" className="nav-item">
                <img 
                    src={location.pathname === "/like" ? likeFullIcon : likeIcon} 
                    alt="Like" 
                />
            </Link>
            <Link to="/search" className="nav-item">
                <img 
                    src={location.pathname === "/search" ? searchFullIcon : searchIcon} 
                    alt="Search" 
                />
            </Link>
            <Link to="/mypage" className="nav-item">
                <img 
                    src={location.pathname === "/mypage" ? myPageFullIcon : myPageIcon} 
                    alt="My Page" 
                />
            </Link>
        </nav>
    );
};

export default Nav