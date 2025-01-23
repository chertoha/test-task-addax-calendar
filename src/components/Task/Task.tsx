import { DragEvent, FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { TaskType } from "../../types/entities";
import { updateTask } from "@/redux/tasks/slice";
import { useTrashContext } from "@/hooks/useTrashContext";
import { useDebouncedCallback } from "use-debounce";

export const Card = styled("label")`
  padding: 7px 10px;
  min-height: 24px;

  display: block;

  font-size: 12px;
  letter-spacing: 0.03em;
  color: #232628;
  word-wrap: break-word;

  background-color: #f5f8f9;
  border-radius: 4px;

  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.75);

  cursor: grab;
`;

export const Area = styled("textarea")`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  background-color: #f5f8f9;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface IProps {
  data: TaskType;
  isNewTask: boolean;
}

const Task: FC<IProps> = ({ data, isNewTask }) => {
  const dispatch = useDispatch();
  const { openTrash, closeTrash } = useTrashContext();

  const [value, setValue] = useState<string>(data.value);
  const [isEditMode, setIsEditMode] = useState<boolean>(isNewTask);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const taskUpdate = (value: string) => {
    if (data.value !== value) {
      dispatch(updateTask({ ...data, value }));
    }
  };

  const debouncedTaskUpdate = useDebouncedCallback(taskUpdate, 500);

  useEffect(() => {
    debouncedTaskUpdate(value);
  }, [value, debouncedTaskUpdate]);

  // useEffect(() => {
  //   if (data.value !== value) {
  //     dispatch(updateTask({ ...data, value }));
  //   }
  // }, [value, dispatch, data]);

  useEffect(() => {
    if (inputRef.current && isEditMode) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const handleDragStart = (event: DragEvent<HTMLLabelElement>) => {
    openTrash();
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify({ ...data }));
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const handleOnPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") setIsEditMode(false);
  };

  const handleDragEnd = () => {
    closeTrash();
  };

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDoubleClick={() => setIsEditMode(true)}
    >
      {isEditMode ? (
        <Area
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={() => setIsEditMode(false)}
          onKeyDown={handleOnPressEnter}
        ></Area>
      ) : (
        <>{value}</>
      )}
    </Card>
  );
};

export default Task;
