import { FC, ReactNode, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getAllRequested } from "../store/characters/characters.slice";

type Props = {
  children: ReactNode;
};

const InitAppData: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRequested());
  }, [dispatch]);

  return children;
};

export default InitAppData;
