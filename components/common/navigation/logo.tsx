import React from "react";
import Image from "next/image";
import styled from "styled-components";

// Theme
import { lightTheme } from "../../../styles/theme";

const LogoImage = styled.img`
  height: 35px;
`;

const Logo = ({ theme }) => {
  return theme === lightTheme ? (
    <LogoImage src="/images/light.png" />
  ) : (
    <LogoImage src="/images/dark.png" />
  );
};

export default Logo;
