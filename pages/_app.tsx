import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

import { AppProps } from "next/app";

import Layout from "../components/Layout/component";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
