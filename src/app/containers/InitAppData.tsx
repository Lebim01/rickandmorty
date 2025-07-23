import { FC, ReactNode, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import {
  selectorCharactersError,
  selectorCharactersLoading,
} from "../store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllRequested } from "../store/characters/characters.slice";

type Props = {
  children: ReactNode;
};

const InitAppData: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectorCharactersLoading);
  const error = useAppSelector(selectorCharactersError);

  useEffect(() => {
    dispatch(getAllRequested());
  }, [dispatch]);

  if (loading) return <LoadingScreen />;

  return children;
};

export default InitAppData;
