import React from 'react';
import './assets/css/reset.css';
import './assets/css/style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Image from './components/Image';
import ImgText from './components/ImgText';
import Banner from './components/Banner';

const App = () => {
    return (
        <>
            <Header element="nexon" />
            <Main>
                <Slider element="nexon" />
                <Image element="section nexon" title="지금 많이 찾는 상품" />
                <div className="promotion">
                    <ImgText />
                </div>
                <Banner element="nexon" title="배너 영역" />
            </Main>
            <Footer element="nexon section gray" />
        </>
    );
}

export default App;
