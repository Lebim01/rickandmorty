/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styles from "./Character.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Character } from "rickmortyapi";
import ImageSkeleton from "./ImageSkeleton";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectorFavorite,
  selectorSelectedCharacter,
} from "@/app/store/characters/characters.selectors";
import {
  removeFavorite,
  setFavorite,
} from "@/app/store/characters/characters.slice";

type Props = {
  character: Character;
  indexNumber: number;
  onClick: (character: Character, index: number) => void;
};

const CharacterItem: FC<Props> = ({ character, indexNumber, onClick }) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const dispatch = useAppDispatch();
  const selectedCharacter = useAppSelector(selectorSelectedCharacter);
  const isFav = useAppSelector(selectorFavorite(character.id));

  const toggleFav = () => {
    if (isFav) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(setFavorite(character));
    }
  };

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
      <div
        className={clsx(styles.actionContainer, "group")}
        onClick={toggleFav}
      >
        {isFav ? (
          <FaHeart className={clsx(styles.actionIconActive)} />
        ) : (
          <FaRegHeart
            className={clsx(styles.actionIcon, "group-hover:text-red-500")}
          />
        )}
        <span>Like</span>
      </div>
    </div>
  );
};

export default CharacterItem;
