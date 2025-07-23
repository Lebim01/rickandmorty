import { forwardRef, ForwardedRef, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} className={clsx(styles.container, className)} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
