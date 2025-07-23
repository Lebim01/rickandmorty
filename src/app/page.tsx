"use client";
import { FaSearch, FaUser } from "react-icons/fa";
import Input from "./components/Input/Input";
import Image from "next/image";
import Carousel from "./components/HorizontalCarousel/HorizontalCarousel";
import CharacterItem from "./components/CharacterItem/CharacterItem";
import {
  selectorCharacters,
  selectorSelectedCharacter,
} from "./store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import CharacterItemSelected from "./components/CharacterItemSelected/CharacterItemSelected";
import { Character } from "rickmortyapi";
import { selectCharacter } from "./store/characters/characters.slice";
import Button from "./components/Button/Button";

export default function Home() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectorCharacters);
  const selectedCharacter = useAppSelector(selectorSelectedCharacter);

  const setSelectedCharacter = (character: Character, index: number) => {
    dispatch(
      selectCharacter({
        character,
        index,
      })
    );
  };

  return (
    <div className="font-sans min-h-screen p-8">
      <main className="flex flex-col gap-[32px]">
        <Image
          className="w-full md:w-1/2"
          src="/logo.png"
          alt="Rick and morty logo"
          width={180}
          height={38}
          priority
        />
        <Input
          iconLeft={<FaSearch />}
          inputProps={{
            placeholder: "Find your character...",
          }}
          iconRight={<FaUser />}
        />

        <Carousel
          items={characters.map((c, index) => (
            <CharacterItem
              character={c}
              key={index}
              indexNumber={index}
              onClick={setSelectedCharacter}
            />
          ))}
        />

        <CharacterItemSelected character={selectedCharacter} />

        <Button>FAVS</Button>
      </main>
    </div>
  );
}
