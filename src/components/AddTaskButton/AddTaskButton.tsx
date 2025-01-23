import { addTask } from "@/redux/tasks/slice";
import { TaskType } from "@/types/entities";
import { nanoid } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const ButtonWrapper = styled("div")`
  width: 24px;
  height: 24px;
`;

export const Button = styled("button")`
  font-size: 20px;
  display: none;
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
        +
      </Button>
    </ButtonWrapper>
  );
};

export default AddTaskButton;
