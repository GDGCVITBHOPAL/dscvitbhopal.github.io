import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/common/navigation/navigation";

import GlobalStyles from "../styles/GlobalStyles";
import { darkTheme, lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    if (
      typeof Storage !== "undefined" &&
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme(darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme == lightTheme) {
      setTheme(darkTheme);
      if (typeof Storage !== "undefined") {
        localStorage.setItem("theme", "dark");
      }
    } else {
      setTheme(lightTheme);
      if (typeof Storage !== "undefined") {
        localStorage.setItem("theme", "light");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
