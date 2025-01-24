import useCalendar from "@/hooks/useCalendar";
import { Buttons, WeekMonthButton } from "./Header.styled";

const ModeButtons = () => {
  const { isMonthMode, toMonthMode, toWeekMode } = useCalendar();

  return (
    <Buttons>
      <WeekMonthButton
        $active={!isMonthMode}
        onClick={toWeekMode}
      >
        Week
      </WeekMonthButton>

      <WeekMonthButton
        $active={isMonthMode}
        onClick={toMonthMode}
      >
        Month
      </WeekMonthButton>
    </Buttons>
  );
};

export default ModeButtons;
