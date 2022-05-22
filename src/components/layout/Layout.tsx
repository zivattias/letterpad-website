import * as React from "react";

import Footer from "../footer/footer";
import Header from "../header";
export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
