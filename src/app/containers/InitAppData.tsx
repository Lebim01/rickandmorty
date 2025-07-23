import { FC, ReactNode, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import {
  selectCharactersError,
  selectCharactersLoading,
} from "../store/characters/characters.selectors";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllRequested } from "../store/characters/characters.slice";

type Props = {
  children: ReactNode;
};

const InitAppData: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectCharactersLoading);
  const error = useAppSelector(selectCharactersError);

  useEffect(() => {
    dispatch(getAllRequested());
  }, [dispatch]);

  if (loading) return <LoadingScreen />;

  return children;
};

export default InitAppData;
