import React, {component} from "react";
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App(){
    return (
      <div>
        <Header />
        <Main myName = "신예은" />
        <Footer />
      </div>  
    );
}

export default App;