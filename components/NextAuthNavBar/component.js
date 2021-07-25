import { useUser } from "@auth0/nextjs-auth0";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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

const NextAuthNavBar = () => {
  const { user, error, isLoading } = useUser();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NextAuthNavBar;
