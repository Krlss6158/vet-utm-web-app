import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'styles/tailwindNew.css'
import "toastify-js/src/toastify.css"

import React from 'react';
import App from "next/app";
import Head from "next/head";
import UserState from 'context/user/UserState';


export default class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Clínica Veterianaria UTM</title>
        </Head>
        <UserState>
          <Layout>
            <React.StrictMode>
              <Component {...pageProps} />
            </React.StrictMode>
          </Layout>
        </UserState>
      </React.Fragment>
    );
  }
}

