import useCalendar from "@/hooks/useCalendar";
import Title from "./Title";
import Search from "./Search";
import NavButtons from "./NavButtons";
import ModeButtons from "./ModeButtons";

import { Button } from "../UIKit/Button/Button.styled";
import { EndToolsWrapper, StartToolsWrapper, Wrapper } from "./Header.styled";

const Header = () => {
  const { resetCalendar } = useCalendar();

  return (
    <Wrapper>
      <StartToolsWrapper>
        <NavButtons />
        <Button onClick={resetCalendar}>Today</Button>
      </StartToolsWrapper>

      <Title />

      <EndToolsWrapper>
        <Search />
        <ModeButtons />
      </EndToolsWrapper>
    </Wrapper>
  );
};

export default Header;
