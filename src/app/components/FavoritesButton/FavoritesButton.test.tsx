/* eslint-disable @typescript-eslint/no-explicit-any */
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/app/tests/helpers/renderWithProviders";
import FavoritesButton from "./FavoritesButton";
import { Character } from "rickmortyapi";

const char1: Character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
} as Character;

it("boton de ver favoritos muestra resultados", async () => {
  const user = userEvent.setup();

  const { getByRole, getByTestId } = renderWithProviders(<FavoritesButton />, {
    preloadedState: {
      characters: { favorites: [char1] },
    } as any,
  });
  expect(getByRole("button")).toBeInTheDocument();

  const btn = getByRole("button");
  await user.click(btn);

  const popper = getByTestId("favorites-popper");

  expect(popper).toBeInTheDocument();
});

it("boton de ver favoritos permite eliminar", async () => {
  const user = userEvent.setup();

  const { getByRole, getByTestId } = renderWithProviders(<FavoritesButton />, {
    preloadedState: {
      characters: { favorites: [char1] },
    } as any,
  });

  const btn = getByRole("button");
  await user.click(btn);

  const trash = getByTestId("favorites-popper-remove");

  expect(trash).toBeInTheDocument();

  await user.click(trash);

  expect(trash).not.toBeInTheDocument();
});
