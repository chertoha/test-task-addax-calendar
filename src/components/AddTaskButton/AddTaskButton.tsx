import { FC } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { IoMdAdd } from "react-icons/io";

import { addTask } from "@/redux/tasks/slice";
import { TaskType } from "@/types/entities";
import { Button, ButtonWrapper } from "./AddTaskButton.styled";

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
