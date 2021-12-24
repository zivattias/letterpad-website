import * as React from "react";

import Footer from "../footer/footer";
import Header from "../header";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='mx-auto lg:w-4/5'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
