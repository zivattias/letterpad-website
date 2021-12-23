import * as React from 'react';

import { Features } from '../features/features';
import Footer from '../footer/footer';
import Header from '../header';
import WhyLetterpad from '../whyletterpad/whyletterpad';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='mx-auto lg:w-4/5'>
      <Header />
      {children}
      <Features />
      <WhyLetterpad />
      <Footer />
    </div>
  );
}
