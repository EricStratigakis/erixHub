import Link from "next/link";

import styles from "./style.module.scss";
import { useUser } from "@auth0/nextjs-auth0";

const NavBar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.NavBar}>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/fit">Fit</Link>

      <div className={styles.RightNav}>
        {user ? (
          <>
            <Link href="/api/auth/logout">Logout</Link>
            <Link href="/profile">Profile</Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className={styles.Footer}>This is where the Footer goes</div>;
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
