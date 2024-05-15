import React, { useState } from 'react'
import Comment from '../assets/img/comment.svg'
import Heart from '../assets/img/heartfull.svg'
import Heart2 from '../assets/img/heartempty.svg'

const Article = ({title, content}) => {
    const [click, setClick] = useState(false);
    return (
        <div className='article_wrap'>
            <div className="article">
                <h2> {title}</h2>
                <p> {content}</p>
                <div>
                    <div>
                        <img src={Comment} alt="" />
                        <p>0</p>
                    </div>
                    {click ? (
                        <div>
                            <img src={Heart} alt="" onClick={() => {setClick(!click)}} />
                            <p>1</p>
                        </div>
                        
                    ) : (
                        <div>
                            <img src={Heart2} alt="" onClick={() => {setClick(!click)}} />
                            <p>0</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="comment">
                    <input type="text" placeholder='댓글을 입력해주세요!' />
                    <button>등록</button>
            </div>
        </div>
  )
}

export default Article