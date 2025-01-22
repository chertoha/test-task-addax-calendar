import { getOffsetMonth } from "@/helpers/calculateCalendar";
import { selectOffset } from "@/redux/offset/selectors";
import { updateOffset } from "@/redux/offset/slice";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const offset = useSelector(selectOffset);

  const onPrevMonthClick = () => {
    dispatch(updateOffset(-1));
  };

  const onNextMonthClick = () => {
    dispatch(updateOffset(1));
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       onNextMonthClick();
  //     }, 3000);
  //   }, []);

  return (
    <header style={{ height: "100px", flexShrink: 0 }}>
      <button
        style={{ width: "100px", fontSize: 30 }}
        onClick={onPrevMonthClick}
      >
        {"<"}
      </button>

      {new Date(2025, getOffsetMonth(offset), 1).toDateString()}

      <button
        style={{ width: "100px", fontSize: 30 }}
        onClick={onNextMonthClick}
      >
        {">"}
      </button>
    </header>
  );
};

export default Header;
