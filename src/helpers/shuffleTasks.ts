import { store } from "@/redux/store";
import { updateBunch } from "@/redux/tasks/slice";
import { TaskType } from "@/types/entities";
import { areDatesEqual } from "@/utils/date";

const shuffleTasks = (
  slotList: (TaskType | undefined)[],
  slotIndex: number,
  incomingTask: TaskType,
  date: Date
) => {
  const list = [...slotList];

  const isSameDay = areDatesEqual(new Date(incomingTask.date), date);
  if (isSameDay) {
    const incomingTaskIndex = list.findIndex(item => item && item.id === incomingTask.id);
    list[incomingTaskIndex] = undefined;
  }

  list[slotIndex] = { ...incomingTask, date: date.toISOString() };

  const updatedTaskList: TaskType[] = list
    .filter(item => item !== undefined)
    .map((task, i) => ({ ...task, order: i + 1 }));

  store.dispatch(updateBunch(updatedTaskList));
};

export default shuffleTasks;
