import styles from "./ButtonNext.module.css";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi";
import Button from "../Button/Button";
import { useAppDispatch } from "@/app/store/hooks";
import { nextCharacter } from "@/app/store/characters/characters.slice";
import clsx from "clsx";
import { FC } from "react";

type Props = {
  isMobile?: boolean;
};

const ButtonNext: FC<Props> = ({ isMobile }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      className={clsx(styles.button, isMobile ? styles.buttonMobile : null)}
      onClick={() => dispatch(nextCharacter())}
    >
      <HiOutlineChevronRight className="inline md:hidden" />
      <HiOutlineChevronDown className="hidden md:inline" />
    </Button>
  );
};

export default ButtonNext;
