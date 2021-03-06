import React, { Fragment } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Card, CardContent } from "@material-ui/core";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.secondary.main,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {" "}
          {/*----- Hero Block -----*/}
          <Grid container justify="flex-end" alignItems="center" direction="row">
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the MidWest
              </Typography>
              <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button className={classes.estimate} variant="contained">
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.learnButtonHero}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*----- Service Block -----*/}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete distal solution, from investigation to <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*----- IOS/Android Block -----*/}
          <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">IOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
                {matchesSM ? null : <br />}
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img className={classes.icon} alt="mobile App icon" src={mobileAppIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*----- Websites Block -----*/}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">Optimised for Search Engines. Built for speed.</Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="Websites icon" src={websitesIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container direction="row">
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Visionary insights coupled with cutting-edge technology is a recipe for evolution</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
