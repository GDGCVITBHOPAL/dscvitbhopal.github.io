const commonTheme = {
  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
};

export const lightTheme = {
  color: {
    background: "#ffffff",
    overlay: "#f9f9f9",
    text: "#292929",
    border: "#eeeeee",
    subText: "#777777",
    placeholder: "#bbbbbb",
  },
  ...commonTheme,
};

export const darkTheme = {
  color: {
    background: "#282828",
    overlay: "#212121",
    text: "#fafafa",
    border: "#202020",
    subText: "#aaaaaa",
    placeholder: "#505050",
  },
  ...commonTheme,
};
