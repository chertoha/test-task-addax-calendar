import { DragEvent, FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TaskType } from "../../types/entities";
import { useDispatch } from "react-redux";
import { updateTask } from "@/redux/tasks/slice";
import { useTrashContext } from "@/hooks/useTrashContext";

export const Card = styled("label")`
  display: block;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 4px;
  min-height: 24px;
  word-wrap: break-word;

  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);

  cursor: grab;
`;

export const Area = styled("textarea")`
  display: block;
  width: 100%;
  outline: none;
  border: none;

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

  useEffect(() => {
    if (data.value !== value) {
      dispatch(updateTask({ ...data, value }));
    }
  }, [value, dispatch, data]);

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
