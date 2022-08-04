import React from "react";
import { styled, TypographyProps } from "@mui/material";
import { Typography } from "reusables/Typography";

interface LogoTitleProps extends TypographyProps {
  children: React.ReactNode;
  component?: string;
}

export const LogoTitle = ({ children, ...restProps }: LogoTitleProps) => {
  return (
    <StyledLogoTitle fontWeight={700} {...restProps}>
      {children}
    </StyledLogoTitle>
  );
};

const StyledLogoTitle = styled(Typography)({
  color: "#fff",
  fontSize: "1.5rem",
  gridArea: "title",
  justifySelf: "start",
});
