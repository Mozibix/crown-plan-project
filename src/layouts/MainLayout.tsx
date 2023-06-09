import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "../(components)/Footer";
import Header from "../(components)/Header";

const MainLayout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <Fragment>
      <Head>
        <title>Crown Plan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svgs/logo-icon.svg" />
      </Head>
      <div className="main_page">
        <div className="main_page_inner">
          <div className="header">
            <Header />
          </div>
          <main className="main_body">{children}</main>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
