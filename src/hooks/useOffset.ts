import { selectOffset } from "@/redux/offset/selectors";
import { updateOffset } from "@/redux/offset/slice";
import { useDispatch, useSelector } from "react-redux";

const useOffset = () => {
  const dispatch = useDispatch();
  const offset = useSelector(selectOffset);

  const decreaseOffset = () => {
    dispatch(updateOffset(-1));
  };

  const increaseOffset = () => {
    dispatch(updateOffset(1));
  };

  return { offset, decreaseOffset, increaseOffset };
};

export default useOffset;
