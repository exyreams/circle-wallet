// noinspection ES6PreferShortImport

import Head from "next/head";

import "../styles/globals.css";
import { Background, Navbar, Footer } from "@/components";

const Emporiums = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" type="image/ico" href="/favicon.ico" />
      <link
        rel="android-chrome-512x512"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link
        rel="android-chrome-192x192"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>Circle Wallet</title>
    </Head>
    <Background>
      <Navbar />
      <div className="pt-65 z-10">
        <Component {...pageProps} />
      </div>
      <Footer />
    </Background>
  </>
);

export default Emporiums;
