import React from 'react'

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiCoins1 /> 멋사 옝응
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>
                    <li>
                        <a href='/baseball'>
                            <CiBaseball /> 야구 하이라이트
                        </a>
                    </li>
                    <li>
                        <a href='/health'>
                            <CiDumbbell /> 헬스
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiBoxes /> 포트폴리오 사이트
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>
            
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/yengeun' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/_ye__eun_' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
