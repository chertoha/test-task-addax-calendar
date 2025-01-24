import { FC, ReactNode, useState } from "react";
import { TrashContext } from "@/hooks/useTrashContext";

interface IProps {
  children: ReactNode;
}

const TrashProvider: FC<IProps> = ({ children }) => {
  const [isTrashVisible, setIsTrashVisible] = useState<boolean>(false);
  const openTrash = () => setIsTrashVisible(true);
  const closeTrash = () => setIsTrashVisible(false);

  return (
    <TrashContext.Provider value={{ isTrashVisible, openTrash, closeTrash }}>
      {children}
    </TrashContext.Provider>
  );
};

export default TrashProvider;
