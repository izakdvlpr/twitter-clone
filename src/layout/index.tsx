import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "" }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Head>    
    {children}    
  </div>
);

export default Layout;
