import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import './App.css';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import ProfilPhoto from './component/profile/ProfilPhoto';

function App() {
  return (
    <div>
    <Header />
    <ProfilPhoto />
    <FullName />
    <Address />
    <Footer />
  </div>
  );
}

export default App;
