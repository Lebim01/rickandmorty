import { FC } from "react";
import styles from "./HorizontalCarousel.module.css";
import {
  selectorCharacters,
  selectorCharactersLoading,
} from "@/app/store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import CharacterSkeleton from "@/app/components/CharacterItem/CharacterSkeleton";
import { Character } from "rickmortyapi";
import { selectCharacter } from "@/app/store/characters/characters.slice";
import CharacterItem from "@/app/components/CharacterItem/CharacterItem";

const Carousel: FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectorCharacters);
  const loading = useAppSelector(selectorCharactersLoading);

  const setSelectedCharacter = (character: Character, index: number) => {
    dispatch(
      selectCharacter({
        character,
        index,
      })
    );
  };
  return (
    <div className={styles.container}>
      {loading
        ? new Array(4)
            .fill(1)
            .map((_, index) => <CharacterSkeleton key={index} />)
        : characters.map((c, index) => (
            <CharacterItem
              character={c}
              key={c.id}
              indexNumber={index}
              onClick={setSelectedCharacter}
            />
          ))}
    </div>
  );
};

export default Carousel;
