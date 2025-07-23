import styles from "./Skeleton.module.css";
import stylesImage from "./ImageSkeleton.module.css";
import clsx from "clsx";

const ImageSkeleton = () => {
  return <div className={clsx(styles.skeleton, stylesImage.image)} />;
};

export default ImageSkeleton;
