import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import styles from "./FavoritesPopper.module.css";
import { selectorFavorites } from "@/app/store/characters/characters.selectors";
import { FaTrash } from "react-icons/fa";
import { removeFavorite } from "@/app/store/characters/characters.slice";

const FavoritesPopper = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectorFavorites);

  return (
    <div className={styles.popperContainer}>
      {favorites.length == 0 && (
        <span className={styles.emptyText}>Empty list</span>
      )}
      {favorites.map((c) => (
        <div key={c.id} className={styles.favoriteItem}>
          <span>{c.name}</span>
          <button onClick={() => dispatch(removeFavorite(c.id))}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPopper;
