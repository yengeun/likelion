import React from 'react';

const ImgText = () => {
    return (
        <div className="promotion">
            <h2>기획전</h2>
            <div className="images">
                <div className="image img1">
                    <div className="image__title">AXILUS 3</div>
                    <div className="image__desc">최상의 플레이를 위한 한정판 테니스화</div>
                    <div className="image__btn">자세히 보기</div>
                </div>
                <div className="image img2">
                    <div className="image__title">Pertex Life</div>
                    <div className="image__desc">힙한 퍼텍스 시리즈와 함께하는 패리스 라이프</div>
                    <div className="image__btn">자세히 보기</div>
                </div>
            </div>
        </div>
    );
}

export default ImgText;
