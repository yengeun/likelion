import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Today from './pages/Today'
import Baseball from './pages/Baseball'
import Health from './pages/Health'
import Port from './pages/Port'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header';   //추가
import Main from './components/section/Main';       //추가
import Footer from './components/section/Footer';   //추가
import { BiBaseball } from 'react-icons/bi';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/baseball" element={<Baseball />} />
                    <Route path="/health" element={<Health />} />
                   
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;