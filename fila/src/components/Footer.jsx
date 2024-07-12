import React from 'react';
import footerLogo from '../assets/img/image13.jpg';

const Footer = (props) => {
    return (
        <footer id="footerType" className={`footer__wrap ${props.element}`}>
            <h2 className="blind">푸터 영역</h2>
            <div className="footer__inner container">
                <div className="footerlogo">
                    <img src={footerLogo} alt="footerlogo" />
                </div>
                <div className="footer__menu">
                    <div>
                        <h3>매장안내</h3>
                    </div>
                    <span className="separator">|</span>
                    <div>
                        <h3>공지사항</h3>
                    </div>
                    <span className="separator">|</span>
                    <div>
                        <h3>FILA MEMBERSHIP</h3>
                    </div>
                    <span className="separator">|</span>
                    <div>
                        <h3>단체 판매</h3>
                    </div>
                    <span className="separator">|</span>
                    <div>
                        <h3>대리점 개설문의</h3>
                    </div>
                    <span className="separator">|</span>
                    <div>
                        <h3>FILA 입찰 참여 안내</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
