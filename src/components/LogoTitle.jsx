import { StyledLogoTitle } from "./LogoTitle.styles";

export const LogoTitle = ({ children, ...restProps }) => {
  return (
    <StyledLogoTitle fontWeight={700} {...restProps}>
      {children}
    </StyledLogoTitle>
  );
};
