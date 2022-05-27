import { AppProps } from "next/app";
import Script from "next/script";

import "@/styles/globals.css";

import { useTracking } from "@/hooks/usetracking";

import Layout from "@/components/layout/Layout";

const GA = "G-GJZVJ5BN1N";

function MyApp({ Component, pageProps }: AppProps) {
  useTracking();

  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
