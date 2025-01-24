import { DragEvent, FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { TaskType } from "../../types/entities";
import { updateTask } from "@/redux/tasks/slice";
import { useTrashContext } from "@/hooks/useTrashContext";
import { Area, Card } from "./Task.styled";

interface IProps {
  data: TaskType;
  isNewTask: boolean;
}

const Task: FC<IProps> = ({ data, isNewTask }) => {
  const { openTrash, closeTrash } = useTrashContext();
  const [value, setValue] = useState<string>(data.value);
  const [isEditMode, setIsEditMode] = useState<boolean>(isNewTask);
  const dispatch = useDispatch();
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
