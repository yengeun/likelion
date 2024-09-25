import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Section/Header'
import Nav from './components/Section/Nav'
import Loading from './components/Loading'
import Like from './components/Like'
import Search from './components/Search'
import Mypage from './components/Mypage'
import './assets/scss/setting/common.scss';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to show the loading page
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the time delay as needed

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    if (isLoading) {
        return <Loading />;  // Show the loading page while loading
    }


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/loading' element={<Loading />} />
                <Route path='/like' element={<Like />} />
                <Route path='/search' element={<Search />} />
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    );
};

export default App
