import { Holiday } from "@/types/entities";
import { createContext, useContext } from "react";

type HolidaysContextType = {
  holidays: Holiday[];
};

export const HolidaysContext = createContext<HolidaysContextType>({ holidays: [] });

export const useHolidaysContext = () => useContext(HolidaysContext);
