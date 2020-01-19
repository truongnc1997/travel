import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/top-header/TopHeader.js';
import TopBanner from './components/top-banner/TopBanner.js';
import WhyBookUs from './components/why-book-us/WhyBookUs';
import ContentBanner from './components/content-banner/ContentBanner';
import ListChoose from './components/list-choose/ListChoose';
import BootomBanner from './components/bottom-banner/BootomBanner';
import HelpContact from './components/help-contact/HelpContact';
import Footer from './components/footer/Footer';
import SliderShow from './components/slider/SliderShow';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <TopBanner />
      <WhyBookUs />
      <div className="container">
        <ContentBanner />
        <SliderShow />
      </div>
      <ListChoose />
      <div className="container">
        <BootomBanner />

      </div>
      <HelpContact />
      <Footer />

    </div>
  );
}

export default App;
