import { TrashContext } from "@/hooks/useTrashContext";
import { FC, ReactNode, useState } from "react";

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
