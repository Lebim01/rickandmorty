/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styles from "./Character.module.css";
import { FaHeart } from "react-icons/fa";
import { Character } from "rickmortyapi";
import ImageSkeleton from "./ImageSkeleton";
import clsx from "clsx";
import { useAppSelector } from "@/app/store/hooks";
import { selectorSelectedCharacter } from "@/app/store/characters/characters.selectors";

type Props = {
  character: Character;
  indexNumber: number;
  onClick: (character: Character, index: number) => void;
};

const CharacterItem: FC<Props> = ({ character, indexNumber, onClick }) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const selectedCharacter = useAppSelector(selectorSelectedCharacter);

  return (
    <div
      className={clsx(
        styles.container,
        selectedCharacter?.id == character.id && styles.containerActive
      )}
      onClick={() => onClick(character, indexNumber)}
    >
      <span className={styles.name}>{character.name}</span>
      {status != "loaded" && <ImageSkeleton />}
      <img
        className={clsx(styles.image, status != "loaded" && "hidden")}
        src={character.image}
        alt="character image"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
      <div className={styles.actionContainer}>
        <FaHeart />
        <span>Like</span>
      </div>
    </div>
  );
};

export default CharacterItem;
