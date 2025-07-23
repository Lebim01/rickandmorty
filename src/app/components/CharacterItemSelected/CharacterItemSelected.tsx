/* eslint-disable @next/next/no-img-element */
import { Character } from "rickmortyapi";
import styles from "./CharacterItemSelected.module.css";
import { FC, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  character: null | Character;
};

const statusText: Record<string, string> = {
  Alive: "LIVE",
  Dead: "DEAD",
};

const PairData: FC<{
  title: ReactNode;
  content: ReactNode;
  className?: string;
}> = ({ title, content, className }) => {
  return (
    <div className={clsx(styles.pairContainer, className)}>
      <span className={styles.pairTitle}>{title}</span>
      <span>{content}</span>
    </div>
  );
};

const CharacterItemSelected: FC<Props> = ({ character }) => {
  if (!character) return <div></div>;
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={character.image}
        alt="Character image"
      />
      {character.status != "unknown" && (
        <div className={styles.liveContainer}>
          <img
            src={
              character.status == "Alive"
                ? "/ellipse-green.svg"
                : "/ellipse-red.svg"
            }
            alt="elipse"
          />
          <span className={styles.liveText}>
            {statusText[character.status]}
          </span>
        </div>
      )}
      <div className={styles.detailsContainer}>
        <PairData
          title={character.name}
          content={
            <div className="flex gap-1 md:flex-col">
              <span>{character.species}</span>
              <span>{character.type}</span>
            </div>
          }
          className={styles.bigText}
        />
        <div className={styles.pairsGrid}>
          <PairData title="Origin" content={character.origin.name} />
          <PairData title="Location" content={character.location.name} />
          <PairData title="Gender" content={character.gender} />
          <PairData
            title="Espisodies"
            content={character.episode.length.toString()}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterItemSelected;
