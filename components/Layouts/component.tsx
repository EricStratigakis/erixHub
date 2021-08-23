import NavBar from "../erix-ui/NextAuthNavBar/MyNavBar";

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
