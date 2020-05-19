import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const acrOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${acrOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${acrOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: "700",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    learnButton: {
      borderColor: `${arcBlue}`,
      color: `${arcBlue}`,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
