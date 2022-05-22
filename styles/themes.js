import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // generic colors
      white: "#FFFBFE",
      black: "#0A0A0A",

      // background: "#020300",
      // link: "",
      // tag: "",

      // modal: "",
      // card: "",

      // gradient: "",

      // brand colors
      // primaryLight: "$blue200", //  $blue600 on dark mode
      // primary: "$blue500",
      // primaryDark: "$blue600",
      // primaryShadow: "$blue100", // $blue600 on dark mode

      // secondaryLight: "$purple200", // $purple600 on dark mode
      // secondary: "$purple500",
      // secondaryDark: "$purple600",
      // secondaryShadow: "$purple100", // $purple600 on dark mode

      // successLight: "$green200", // $green600 on dark mode
      // success: "$green500",
      // successDark: "$green600",
      // successShadow: "$green100", // $green600 on dark mode

      // warningLight: "$yellow200", // $yellow600 on dark mode
      // warning: "$yellow500",
      // warningDark: "$yellow600",
      // warningShadow: "$yellow100", // $yellow600 on dark mode

      // errorLight: "$red200", // $red600 on dark mode
      // error: "$red500",
      // errorDark: "$red600",
      // errorShadow: "$red100", // $red600 on dark mode
    },
    radii: {
      xs: "7px",
      sm: "9px",
      md: "12px",
      base: "14px",
      lg: "18px", // preferred value by NextUI components
      xl: "20px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px",
    },
  },
});

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // generic colors
      white: "#FFFBFE",
      black: "#0A0A0A",

      // background: "#FFFBFE",
      // link: "",
      // tag: "",

      // modal: "",
      // card: "",

      // gradient: "",

      // brand colors
      // primaryLight: "$blue200", //  $blue600 on dark mode
      // primary: "$blue500",
      // primaryDark: "$blue600",
      // primaryShadow: "$blue100", // $blue600 on dark mode

      // secondaryLight: "$purple200", // $purple600 on dark mode
      // secondary: "$purple500",
      // secondaryDark: "$purple600",
      // secondaryShadow: "$purple100", // $purple600 on dark mode

      // successLight: "$green200", // $green600 on dark mode
      // success: "$green500",
      // successDark: "$green600",
      // successShadow: "$green100", // $green600 on dark mode

      // warningLight: "$yellow200", // $yellow600 on dark mode
      // warning: "$yellow500",
      // warningDark: "$yellow600",
      // warningShadow: "$yellow100", // $yellow600 on dark mode

      // errorLight: "$red200", // $red600 on dark mode
      // error: "$red500",
      // errorDark: "$red600",
      // errorShadow: "$red100", // $red600 on dark mode
    },
    radii: {
      xs: "7px",
      sm: "9px",
      md: "12px",
      base: "14px",
      lg: "18px", // preferred value by NextUI components
      xl: "20px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px",
    },
  },
});



export { darkTheme, lightTheme };
