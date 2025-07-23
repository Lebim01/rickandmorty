import styles from "./CharacterSkeleton.module.css";

const CharacterSkeleton = () => {
  return (
    <div style={{ width: 200, height: 200 }} className={styles.skeleton} />
  );
};

export default CharacterSkeleton;
