import React, { useState } from 'react'

const Write = () => {
    const [title, setTitle] = useState('')
    const[content, setContent] = useState('')

    const print = () => {
        if(title === '' || content === ''){
            alert('내용을 채워주세요')
            return;
        }

        console.log('title: ', title)
        console.log('content: ', content)
    }
    return (
        <div className='write_wrap'>
            <input type="text" placeholder='제목을 입력해주세요' className='title' value ={title} />
            <textarea placeholder='내용을 입력해주세요'></textarea>
            <div className="btn_box">
                <button className="delete">cancel</button>
                <button className="okay">confirm</button>
            </div>s
        </div>
  )
}

export default Write