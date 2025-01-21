import { createContext, useContext } from "react";

type TrashContextType = {
  isTrashVisible: boolean;
  openTrash: () => void;
  closeTrash: () => void;
};

export const TrashContext = createContext<TrashContextType>({
  isTrashVisible: false,
  openTrash: () => {},
  closeTrash: () => {},
});
export const useTrashContext = () => useContext(TrashContext);
