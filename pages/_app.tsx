import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/common/navigation/navigation";

import GlobalStyles from "../styles/GlobalStyles";
import { darkTheme, lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme == lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
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
