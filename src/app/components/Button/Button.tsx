import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
};

const Button: FC<Props> = ({ children }) => {
  return <button className={styles.container}>{children}</button>;
};

export default Button;
