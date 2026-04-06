import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = React.forwardRef(
  ({ as, href, target, rel, type, children, ...rest }, ref) => {
    const Comp = as || (href ? "a" : "button");

    const buttonProps = Comp === "button" ? { type: type || "button" } : {};

    return (
      <ButtonStyled
        as={Comp}
        href={href}
        target={target}
        rel={rel}
        ref={ref}
        {...buttonProps}
        {...rest}
      >
        {children}
      </ButtonStyled>
    );
  }
);

export default Button;
