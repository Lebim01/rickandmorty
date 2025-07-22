import styles from "./Input.module.css";
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";

type Props = {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const Input: FC<Props> = ({ iconLeft, iconRight, inputProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{iconLeft}</div>
      <input {...inputProps} className={styles.field} />
      <div className={styles.icon}>{iconRight}</div>
    </div>
  );
};

export default Input;
