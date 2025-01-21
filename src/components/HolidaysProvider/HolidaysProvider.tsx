import { HolidaysContext } from "@/hooks/useHolidaysContext";
import { useGetHolidaysQuery } from "@/redux/holidays/holidaysApi";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const HolidaysProvider: FC<IProps> = ({ children }) => {
  const { data } = useGetHolidaysQuery();

  return (
    <HolidaysContext.Provider value={{ holidays: data || [] }}>{children}</HolidaysContext.Provider>
  );
};

export default HolidaysProvider;
