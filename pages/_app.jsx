import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Head from 'next/head';
import '../styles/globals.css';


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;