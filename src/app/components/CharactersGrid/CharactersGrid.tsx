import styles from './CharactersGrid.module.css'
import {
  selectorCharacters,
  selectorCharactersLoading,
} from "@/app/store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { FC } from "react";
import CharacterSkeleton from "@/app/components/CharacterItem/CharacterSkeleton";
import CharacterItem from "@/app/components/CharacterItem/CharacterItem";
import { Character } from "rickmortyapi";
import { selectCharacter } from "@/app/store/characters/characters.slice";

const CharactersGrid: FC = () => {
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
    <>
      {characters.length == 0 && !loading && <span>No results</span>}
      <div className={styles.grid}>
        {loading
          ? new Array(6)
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
    </>
  );
};

export default CharactersGrid;
