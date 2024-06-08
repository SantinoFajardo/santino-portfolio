import React, { useState } from "react";
import NavigationBar from "./NavBar";

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
      {children}
    </>
  );
};

export default Layout;
