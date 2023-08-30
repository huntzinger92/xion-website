import { createTheme } from "@mui/material/styles";

export const backgroundColor = "#f0f0f0";

export const slightlyDarkerBackgroundColor = "#ebebed";

export const contrastingBackgroundColor = "#ffffff";

export const defaultTextColor = "#212121";

// navbar button text
export const contrastingTextColor = "white";

export const disabledButtonTextColor = "gray";

export const darkBackgroundColor = "#242424";

export const thematicColor = "#420734";

export const buttonColor = "#d9b4ed";

export const defaultPageTextStyle = {
  fontSize: "1.5rem",
  marginBottom: "20px",
};

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: darkBackgroundColor,
          color: contrastingTextColor,
          // enabled outlined textfield border
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline":
            {},
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: buttonColor,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor,
          fontSize: "15px",
        },
        label: {
          cursor: "pointer",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: contrastingBackgroundColor,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {},
        },
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 100px ${backgroundColor} inset`,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: contrastingTextColor,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor,
        },
      },
    },
  },
  palette: {
    primary: {
      main: thematicColor,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    allVariants: {
      color: defaultTextColor,
    },
    h3: {
      color: defaultTextColor,
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "15px",
    },
  },
});
