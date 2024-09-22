import React from 'react';
import Header from './assets/Header';
import Main from './assets/Main';
import Footer from './assets/Footer';
import './App.css';

function App() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('URL이 복사되었습니다!');
  };

  return (
    <div className="app-container">
      <Header />
      <Main handleCopyLink={handleCopyLink} />
      <Footer />
    </div>
  );
}

export default App;
