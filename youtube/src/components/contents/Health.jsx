import React from 'react'

import { healthText } from '../../data/health'
import { Link } from 'react-router-dom'

const Health = () => {
    return (
        <section id='health'>
            <h2>😛 헬스장 운동</h2>
            <div className='video__inner'>
                {healthText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Health