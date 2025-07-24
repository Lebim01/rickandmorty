/* eslint-disable @typescript-eslint/no-explicit-any */
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/app/tests/helpers/renderWithProviders";
import HorizontalCarousel from "./HorizontalCarousel";
import { Character } from "rickmortyapi";

const char1 = { id: 1, name: "Rick Sanchez" } as Character;

describe("<FavButton /> — toggle favorito", () => {
  it("al hacer clic alterna entre agregar y quitar de favoritos", async () => {
    const user = userEvent.setup();

    /* 1️⃣ Estado inicial SIN favorito */
    const { getByTestId, store } = renderWithProviders(<HorizontalCarousel />, {
      preloadedState: {
        characters: { items: [char1], favorites: [] },
      } as any,
    });

    /* 2️⃣ Primera pulsación → agrega */
    const btn = getByTestId("toggle-favorite");
    await user.click(btn);

    // cambia el icono
    expect(getByTestId("icon-favorite-on")).toBeInTheDocument();
    // redux actualizado
    expect(store.getState().characters.favorites).toContainEqual(char1);

    /* 3️⃣ Segunda pulsación → quita (toggle) */
    await user.click(btn);

    // vuelve al icono vacío
    expect(getByTestId("icon-favorite-off")).toBeInTheDocument();
    // redux sin el personaje
    expect(store.getState().characters.favorites).not.toContainEqual(char1);
  });
});
