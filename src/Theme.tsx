import {
  MantineThemeOverride,
  MantineTheme,
  TextProps,
  NavbarProps,
  NavLinkProps,
  SelectProps,
  ButtonProps,
} from "@mantine/core";

const getNavbarDefaultProps = (theme: MantineTheme): Partial<NavbarProps> => {
  return {
    styles: {
      root: {
        backgroundColor: theme.colors.blue[9],
        top: theme.spacing["0"],
      },
    },
  };
};

const getNavLinkDefaultProps = (theme: MantineTheme): NavLinkProps => {
  return {
    fw: "500",
    styles: {
      label: {
        color: theme.colors.blue[1],
        fontSize: theme.fontSizes["md"],

        marginLeft: theme.spacing["2.5"],
        "&:hover": {
          color: theme.colors.blue[0],
        },
      },
      root: {
        padding: `${theme.spacing["4"]} ${theme.spacing["6"]}`,
        borderRadius: theme.spacing["2"],
        "&:hover": {
          backgroundColor: theme.colors.blue[6],
          ".mantine-NavLink-label": {
            color: theme.colors.blue[0],
          },
          ".mantine-NavLink-icon": {
            color: theme.colors.blue[0],
          },
        },
      },
      icon: {
        color: theme.colors.blue[1],
      },
    },
  };
};

const getSelectDefaultProps = (theme: MantineTheme): Partial<SelectProps> => {
  return {
    styles: {
      label: {
        marginTop: theme.spacing["8"],
        color: theme.colors.blue[7],
        fontSize: theme.fontSizes["md"],
        fontWeight: 600,
      },
      input: {
        marginTop: theme.spacing["2"],
        borderColor: "#CED4DA",
        "&::placeholder": {
          color: "#6C757D",
          fontSize: theme.fontSizes["md"],
          fontWeight: 500,
        },
      },
    },
  };
};

const getTextDefaultProps = (theme: MantineTheme): TextProps => ({
  color: theme.colors.blue[7],
});
const getButtonDefaultProps = (theme: MantineTheme): ButtonProps => ({
  fz: theme.fontSizes["lg"],
  fw: "600",
  size: "xl",
  styles: {
    root: {
      borderRadius: theme.spacing["2"],
    },
  },
});

export const theme: MantineThemeOverride = {
  components: {
    Text: { defaultProps: getTextDefaultProps },
    Navbar: {
      defaultProps: getNavbarDefaultProps,
    },
    NavLink: {
      defaultProps: getNavLinkDefaultProps,
    },

    Select: {
      defaultProps: getSelectDefaultProps,
    },

    Button: {
      defaultProps: getButtonDefaultProps,
      variants: {
        outline: (theme) => {
          return {
            root: {
              borderColor: theme.colors.blue[8],
              color: theme.colors.blue[8],
            },
          };
        },
        filled: (theme) => {
          return {
            root: {
              backgroundColor: theme.colors.blue[8],
              "&:hover": {
                backgroundColor: theme.colors.blue[7],
              },
            },
          };
        },
      },
    },
  },
  primaryColor: "blue",
  colors: {
    blue: [
      "#ffffff",
      "#A0B2D0",
      "#486081",
      "#70A9F6",
      "#4A8FF5",
      "#2278D3",
      "#0D6EFD",
      "#133455",
      "#0D6EFD",
      "#00285A",
    ],
    black: [
      "#212529",
      "#495057",
      "#CED4DA",
      "#6C757D",
      "#4A8FF5",
      "#2278D3",
      "#003271",
      "#133455",
      "#0D6EFD",
      "#00285A",
    ],
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
    "9xl": "8rem", // 128px
  },
  spacing: {
    0: "0px", // 0px,
    px: "1px", // 1px
    0.5: "0.125rem", // 2px
    1: "0.25rem", // 4px
    1.5: "0.375rem", // 6px
    2: "0.5rem", // 8px
    2.5: "0.625rem", // 10px
    3: "0.75rem", // 12px
    3.5: "0.875rem", // 14px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    7: "1.75rem", // 28px
    8: "2rem", // 32px
    9: "2.25rem", // 36px
    10: "2.5rem", // 40px
    11: "2.75rem", // 44px
    12: "3rem", // 48px
    14: "3.5rem", // 56px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    28: "7rem", // 112px
    32: "8rem", // 128px
    36: "9rem", // 144px
    40: "10rem", // 160px
    44: "11rem", // 176px
    48: "12rem", // 192px
    52: "13rem", // 208px
    56: "14rem", // 224px
    60: "15rem", // 240px
    64: "16rem", // 256px
    72: "18rem", // 288px
    80: "20rem", // 320px
    96: "24rem", // 384px
  },
  shadows: {
    sm: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
  },
};
