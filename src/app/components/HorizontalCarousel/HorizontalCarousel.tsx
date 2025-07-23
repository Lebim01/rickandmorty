import { FC, ReactNode } from "react";
import styles from "./HorizontalCarousel.module.css";

type Props = {
  items: ReactNode[];
};

const Carousel: FC<Props> = ({ items }) => {
  return <div className={styles.container}>{items}</div>;
};

export default Carousel;
