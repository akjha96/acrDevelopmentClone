import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

// svgs
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1302,
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold ",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icons: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2em",
      height: "2em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" onClick={() => setValue(0)} className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Developement
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                className={classes.link}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.link}>
                The Revolution
              </Grid>
              <Grid item component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.link}>
                Vision
              </Grid>
              <Grid item component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.link}>
                Technology
              </Grid>
              <Grid item component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" onClick={() => setValue(3)} className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} to="/about" onClick={() => setValue(3)} className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} to="/about" onClick={() => setValue(3)} className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/contact" onClick={() => setValue(4)} className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img alt="footer decorative slash adornment" src={footerAdornment} className={classes.adornment} />
      <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
        <Grid item target="_blank" rel="noopener noreferrer" component={"a"} href="http://www.facebook.com">
          <img src={facebook} alt="facebook logo" className={classes.icons} />
        </Grid>
        <Grid item target="_blank" rel="noopener noreferrer" component={"a"} href="http://www.twitter.com">
          <img src={twitter} alt="twitter logo" className={classes.icons} />
        </Grid>
        <Grid item target="_blank" rel="noopener noreferrer" component={"a"} href="http://www.instagram.com">
          <img src={instagram} alt="instagram logo" className={classes.icons} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
