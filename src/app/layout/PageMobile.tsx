"use client";
import styles from "./PageMobile.module.css";
import { FaSearch, FaUser } from "react-icons/fa";
import Input from "@/app/components/Input/Input";
import Image from "next/image";
import Carousel from "@/app/components/HorizontalCarousel/HorizontalCarousel";
import { selectorSelectedCharacter } from "@/app/store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import CharacterItemSelected from "@/app/components/CharacterItemSelected/CharacterItemSelected";
import { searchRequested } from "@/app/store/characters/characters.slice";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useEffect, useState } from "react";
import FavoritesButton from "@/app/components/FavoritesButton/FavoritesButton";
import ButtonNext from "@/app/components/CharacterItemSelected/ButtonNext";
import ButtonPrev from "@/app/components/CharacterItemSelected/ButtonPrev";

export default function PageMobile() {
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
            onChange: (e) => setInputValue(e.target.value),
          }}
          iconRight={<FaUser />}
        />

        <Carousel />

        {selectedCharacter && (
          <div className={styles.itemSelectedContainer}>
            <ButtonPrev isMobile />
            <CharacterItemSelected character={selectedCharacter} />
            <ButtonNext isMobile />
          </div>
        )}

        <FavoritesButton />
      </main>
    </div>
  );
}
