import React, { useState } from 'react';
import img1 from '../assets/img/Rectangle135.svg';
import img2 from '../assets/img/Rectangle136.svg';
import img3 from '../assets/img/Rectangle137.svg';
import img4 from '../assets/img/Rectangle138.svg';
import img5 from '../assets/img/Rectangle139.svg';
import img7 from '../assets/img/Rectangle141.svg';
import img8 from '../assets/img/Rectangle143.svg';
import img9 from '../assets/img/Rectangle144.svg';
import img10 from '../assets/img/Rectangle145.svg';
import img11 from '../assets/img/Rectangle146.svg';
import img12 from '../assets/img/Rectangle 151.svg';
import img13 from '../assets/img/Rectangle 152.svg';
import img14 from '../assets/img/Rectangle 153.svg';


import '../assets/css/style.css';

const Image = () => {
    const [activeTag, setActiveTag] = useState('tag1');

    const tags = {
        tag1: [
            { info: '공용 컴포트핏 라이프스타일', img: img1, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
            { info: '공용 컴포트핏 라이프스타일', img: img2, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
            { info: '공용 컴포트핏 라이프스타일',img: img3, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
            { info: '공용 컴포트핏 라이프스타일', img: img4, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
            { info: '공용 컴포트핏 라이프스타일', img: img5, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
        ],
        tag2: [
            { img: img7, title: '휠라 에샤페 VC', price: '89,000' },
            { img: img8 },
            { img: img9},
            { img: img10},
            { img: img11},

        ],
        tag3: [
            { img: img12, title: '수피마 사이드배색 반팔티', price: '39,000' },
            { img: img13 },
            { img: img14},

        ]
    };

    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };

    return (
        <div className="products">
            <h2>지금 많이 찾는 상품</h2>
            <div className="tags">
                <span
                    className={`tag ${activeTag === 'tag1' ? 'active' : ''}`}
                    onClick={() => handleTagClick('tag1')}
                >
                    #냉감티셔츠
                </span>
                <span
                    className={`tag ${activeTag === 'tag2' ? 'active' : ''}`}
                    onClick={() => handleTagClick('tag2')}
                >
                    #에샤페
                </span>
                <span
                    className={`tag ${activeTag === 'tag3' ? 'active' : ''}`}
                    onClick={() => handleTagClick('tag3')}
                >
                    #반팔 티셔츠
                </span>
                <span
                    className={`tag ${activeTag === 'tag4' ? 'active' : ''}`}
                    onClick={() => handleTagClick('tag4')}
                >
                    #페이토 & 샌들
                </span>
                <span
                    className={`tag ${activeTag === 'tag5' ? 'active' : ''}`}
                    onClick={() => handleTagClick('tag5')}
                >
                    #인터런
                </span>
            </div>
            <div className="product-list">
                {tags[activeTag].map((product, index) => (
                    <div className="product-item" key={index}>
                        <img src={product.img} alt={`상품 ${index + 1}`} />
                        <p className="product-info">{product.info}</p>
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Image;
