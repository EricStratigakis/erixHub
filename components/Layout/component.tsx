import Link from "next/link";

import NavBar from "../NextAuthNavBar/component";

const Footer = () => {
  return <div>This is where the Footer goes</div>;
};

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
