import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Baseball from '../components/contents/Baseball'
import Health from '../components/contents/Health'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
    return (
        <Main 
            title = "옝응 유튜브"
            description="옝응의 유튜버 사이트에 오신 것을 환영합니다.">
            
            <Today />
            <Baseball />
            <Health />
            <Portfolio />
            <Youtube />
        </Main>
    )
}

export default Home