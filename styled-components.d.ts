import { lightTheme } from "./styles/theme";

type ThemeInterface = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
