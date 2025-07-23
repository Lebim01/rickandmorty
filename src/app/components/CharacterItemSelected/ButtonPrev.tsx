import styles from "./ButtonPrev.module.css";
import { HiOutlineChevronLeft, HiOutlineChevronUp } from "react-icons/hi";
import Button from "../Button/Button";
import { useAppDispatch } from "@/app/store/hooks";
import { prevCharacter } from "@/app/store/characters/characters.slice";
import clsx from "clsx";
import { FC } from "react";

type Props = {
  isMobile?: boolean;
};

const ButtonPrev: FC<Props> = ({ isMobile }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      className={clsx(styles.button, isMobile ? styles.buttonMobile : null)}
      onClick={() => dispatch(prevCharacter())}
    >
      <HiOutlineChevronLeft className="inline md:hidden" />
      <HiOutlineChevronUp className="hidden md:inline" />
    </Button>
  );
};

export default ButtonPrev;
