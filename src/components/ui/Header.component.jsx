import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// drawer
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Logos
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.secondary.main,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const menuLabel = "simple-menu";
  const classes = useStyle();
  // set the state react hook functions to  be used to change values
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  // for responsive design implementation
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // To check device screen type
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  //function to change Active Tab
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
    { name: "IOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? menuLabel : undefined, ariaHasPopup: anchorEl ? "true" : undefined, mouseOver: (event) => handleClick(event) },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  // Using react hook to check if select active tab is same as in URL or Selected one.
  // If not then use setValue function to set the same

  useEffect(() => {
    // Switch statement for correct route highlight

    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== routes.activeIndex) {
            props.setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.activeIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [routes, menuOptions, props.selectedIndex, props.value, props]);

  // To handle opening and closing of Menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const tabs = (
    <Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
        {routes.map((route, index) => (
          <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaHasPopup} onMouseOver={route.mouseOver} />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" component={Link} to="estimate" className={classes.button}>
        Free Estimate
      </Button>
      <Menu style={{ zIndex: 1302 }} id={menuLabel} anchorEl={anchorEl} open={openMenu} onClose={handleClose} classes={{ paper: classes.menu }} MenuListProps={{ onMouseLeave: handleClose }} elevation={0} keepMounted>
        {menuOptions.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleClose();
              setValue(1);
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{ paper: classes.drawer }}>
        <div className={classes.toolbarMargin} />
        {/* List to display Items */}
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          {/* free estimate  */}
          <ListItem
            className={classes.drawerItemEstimate}
            selected={value === 5}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button component={Link} to="/" disableRipple className={classes.logoContainer}>
              <img className={classes.logo} src={logo} alt="Company Logo" onClick={() => setValue(0)} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
