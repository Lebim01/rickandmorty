/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./Character.module.css";
import { FaHeart } from "react-icons/fa";
import { Character } from "rickmortyapi";

type Props = {
  character: Character;
  indexNumber: number;
  onClick: (character: Character, index: number) => void;
};

const CharacterItem: FC<Props> = ({ character, indexNumber, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(character, indexNumber)}>
      <span className={styles.name}>{character.name}</span>
      <img className={styles.image} src={character.image} alt="character image" />
      <div className={styles.actionContainer}>
        <FaHeart />
        <span>Like</span>
      </div>
    </div>
  );
};

export default CharacterItem;
