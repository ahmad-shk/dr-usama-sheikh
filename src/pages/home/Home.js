import React from 'react';
import Appoinment from '../../components/Appoinment/Appoinment';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Counter from '../../components/Counter/Counter';
import Services from '../../components/Services/Services';
import MedicalChatStandalone from '../../components/MedicalChatStandalone/MedicalChatStandalone';

function Home() {

  return (
    <>

      <HeroBanner />
      <Features />
      <About />
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto -mb-16">
          <Counter />
        </div>
      </div>
      <div className="relative z-0">
        <Services />
      </div>
      <Appoinment />
      <MedicalChatStandalone />
    </>
  );

}
export default Home;
