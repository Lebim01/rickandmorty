"use client";
import styles from "./PageDesktop.module.css";
import { FaSearch, FaUser } from "react-icons/fa";
import Input from "@/app/components/Input/Input";
import Image from "next/image";
import { selectorSelectedCharacter } from "@/app/store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import CharacterItemSelected from "@/app/components/CharacterItemSelected/CharacterItemSelected";
import { searchRequested } from "@/app/store/characters/characters.slice";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useEffect, useState } from "react";
import FavoritesButton from "@/app/components/FavoritesButton/FavoritesButton";
import CharactersGrid from "@/app/components/CharactersGrid/CharactersGrid";
import ButtonPrev from "../components/CharacterItemSelected/ButtonPrev";
import ButtonNext from "../components/CharacterItemSelected/ButtonNext";

export default function PageDesktop() {
  const dispatch = useAppDispatch();
  const selectedCharacter = useAppSelector(selectorSelectedCharacter);

  const [inputValue, setInputValue] = useState("");
  const inputFilter = useDebounce(inputValue);

  useEffect(() => {
    dispatch(searchRequested(inputFilter));
  }, [dispatch, inputFilter]);

  return (
    <div className={styles.screen}>
      <main className={styles.main}>
        <div className="flex justify-end">
          <Image
            className="w-1/2 max-w-[300px]"
            src="/logo.png"
            alt="Rick and morty logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className={styles.galleryContainer}>
          <CharacterItemSelected character={selectedCharacter} />
          <div className="flex flex-col gap-4 p-4">
            <Input
              iconLeft={<FaSearch />}
              inputProps={{
                placeholder: "Find your character...",
                onChange: (e) => setInputValue(e.target.value),
              }}
              iconRight={<FaUser />}
            />
            <div className="flex gap-2">
              <div className={styles.gridContainer}>
                <CharactersGrid />
              </div>
              <div className={styles.buttonsContainer}>
                <ButtonPrev />
                <ButtonNext />
              </div>
            </div>
            <FavoritesButton />
          </div>
        </div>
      </main>
    </div>
  );
}
