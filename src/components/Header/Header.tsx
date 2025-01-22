import useOffset from "@/hooks/useOffset";
import { getOffsetMonth } from "@/helpers/calculateCalendar";

const Header = () => {
  const { offset, decreaseOffset, increaseOffset } = useOffset();

  return (
    <header style={{ height: "100px", flexShrink: 0 }}>
      <button
        style={{ width: "100px", fontSize: 30 }}
        onClick={decreaseOffset}
      >
        {"<"}
      </button>

      {new Date(2025, getOffsetMonth(offset), 1).toDateString()}

      <button
        style={{ width: "100px", fontSize: 30 }}
        onClick={increaseOffset}
      >
        {">"}
      </button>
    </header>
  );
};

export default Header;
