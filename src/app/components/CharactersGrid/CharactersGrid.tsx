import { FC, ReactNode } from "react";

type Props = {
  items: ReactNode[];
};

const CharactersGrid: FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2">{items}</div>
  )
}

export default CharactersGrid