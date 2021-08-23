import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MyTextLink = ({ text, route }) => {
  return (
    <Link href={route}>
      <Button color="inherit">{text}</Button>
    </Link>
  );
};

const NavBarLinks = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <MyTextLink text="Home" route="/" />
      <MyTextLink text="Fit" route="/fit" />
      <MyTextLink text="Findings" route="/findings" />
      <MyTextLink text="Dashboard" route="/dashboard" />
      <MyTextLink text="Products" route="/products" />
      <MyTextLink text="test" route="/test" />
      <MyTextLink text="The Oracle" route="/theoracle" />

      {user ? (
        <>
          <MyTextLink text="Logout" route="/api/auth/logout" />
          <MyTextLink text="Profile" route="/profile" />
        </>
      ) : (
        <MyTextLink text="Login" route="/api/auth/login" />
      )}
    </>
  );
};

const NextAuthNavBar = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Welcome to ErixHub
        </Typography>
        <SwipeableDrawer
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
        >
          <NavBarLinks />
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default NextAuthNavBar;
