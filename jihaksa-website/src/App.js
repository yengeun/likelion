import React from 'react';
import Header from './assets/Header';
import Main1 from './assets/Main';
import Main2 from './assets/Main2';
import Main3 from './assets/Main3';
import Footer from './assets/Footer';
import './App.css';

function App() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('URL이 복사되었습니다!');
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <Header />

      {/* Main Sections */}
      <Main1 handleCopyLink={handleCopyLink} />
      <Main2 />
      <Main3 />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
