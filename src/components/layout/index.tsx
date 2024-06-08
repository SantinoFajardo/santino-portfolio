import React, { useState } from "react";
import NavigationBar from "./NavBar";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  const [extensionBar, setExtensionBar] = useState(false);
  return (
    <>
      <NavigationBar
        extensionBar={extensionBar}
        setExtensionBar={setExtensionBar}
      />
      <Head>
        <title>Santino Fajardo</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/6528/6528597.png"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
