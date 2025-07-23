import styles from "./ButtonPrev.module.css";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Button from "../Button/Button";
import { useAppDispatch } from "@/app/store/hooks";
import { prevCharacter } from "@/app/store/characters/characters.slice";

const ButtonPrev = () => {
  const dispatch = useAppDispatch();

  return (
    <Button className={styles.button} onClick={() => dispatch(prevCharacter())}>
      <HiOutlineChevronLeft />
    </Button>
  );
};

export default ButtonPrev;
