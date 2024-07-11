import React, { useState } from 'react';
import img1 from '../assets/img/Rectangle135.svg';
import img2 from '../assets/img/Rectangle136.svg';
import img3 from '../assets/img/Rectangle137.svg';

import '../assets/css/style.css';

const Image = () => {
    const [activeTag, setActiveTag] = useState('tag1');

    const tags = {
        tag1: [
            { img: img1, title: 'COLD WAVE 그라데 고립된 반팔 티셔츠', price: '49,000원' },
            { img: img2, title: 'COLD WAVE 그라데 고립된 반팔 티셔츠', price: '49,000원' },
            { img: img3, title: 'COLD WAVE 그라데 고립된 반팔 티셔츠', price: '49,000원' },
        ],
        tag2: [
            { img: img1, title: 'COLD WAVE 그라데 고립된 반팔 티셔츠2', price: '50,000원' },
            { img: img2, title: 'COLD WAVE 그라데 고립된 반팔 티셔츠2', price: '50,000원' },
            { img: img3, title: 'COLD WAVE 그라데 고립된 반팔 티셔츠2', price: '50,000원' },
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
                    #발열티셔츠
                </span>
                <span
                    className={`tag ${activeTag === 'tag2' ? 'active' : ''}`}
                    onClick={() => handleTagClick('tag2')}
                >
                    #에어쿨
                </span>
            </div>
            <div className="product-list">
                {tags[activeTag].map((product, index) => (
                    <div className="product-item" key={index}>
                        <img src={product.img} alt={`상품 ${index + 1}`} />
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Image;
