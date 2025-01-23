import { addTask } from "@/redux/tasks/slice";
import { TaskType } from "@/types/entities";
import { nanoid } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";

export const ButtonWrapper = styled("div")`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled("button")`
  /* display: none; */

  opacity: 0;
  transform: translate(0, -30px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  border-radius: 50%;
  border: 2px solid #0f7d0d;

  color: #0f7d0d;

  & > svg {
    height: 100%;
    width: 100%;
  }

  transition: transform 400ms ease-in-out, opacity 300ms ease-in-out;
`;

interface IProps {
  date: Date;
  lastOrderValue: number;
  showNewTask: (id: number | string) => void;
}

const AddTaskButton: FC<IProps> = ({ date, lastOrderValue, showNewTask }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const id = nanoid(5);
    const task: TaskType = {
      id,
      date: date.toISOString(),
      value: "",
      order: lastOrderValue + 1,
    };

    dispatch(addTask(task));
    showNewTask(id);
  };

  return (
    <ButtonWrapper>
      <Button
        type="button"
        aria-label="Add task"
        onClick={onClickHandler}
      >
        <IoMdAdd size={20} />
      </Button>
    </ButtonWrapper>
  );
};

export default AddTaskButton;
