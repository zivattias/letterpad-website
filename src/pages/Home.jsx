import React from "react";

import Header from "../partials/Header";
import Hero from "../partials/Hero";
import PressLogos from "../partials/PressLogos";
import Features from "../partials/Features";
import Features02 from "../partials/Features02";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";
import Client from "../partials/Client";

function Home() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Header />
      <main className='grow'>
        <Hero />
        <Features />
        <Features02 />
        <Client />
        <Cta />
        <PressLogos />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
