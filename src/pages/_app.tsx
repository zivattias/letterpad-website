import { AppProps } from "next/app";
import Script from "next/script";

import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";

const GA = "G-6BXBVG7328";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
      />

      <Script id='ga-init' strategy='lazyOnload'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
