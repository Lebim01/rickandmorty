import styles from "./ButtonNext.module.css";
import { HiOutlineChevronRight } from "react-icons/hi";
import Button from "../Button/Button";
import { useAppDispatch } from "@/app/store/hooks";
import { nextCharacter } from "@/app/store/characters/characters.slice";

const ButtonNext = () => {
  const dispatch = useAppDispatch();

  return (
    <Button className={styles.button} onClick={() => dispatch(nextCharacter())}>
      <HiOutlineChevronRight />
    </Button>
  );
};

export default ButtonNext;
