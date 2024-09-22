import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://textbook.jihak.co.kr/img/logo-wh.svg"
            alt="지학사 푸터 로고"
            className="footer-logo-image"
          />
        </div>
        <div className="footer-text">
          <p>서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452</p>
          <p>통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR</p>
          <p>대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002</p>
          <p>COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED.</p>
          <p>(주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
