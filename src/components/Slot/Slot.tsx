import { DragEvent, FC, useState } from "react";
import styled from "styled-components";

export const EmptyItem = styled("li")<{ $hovered: boolean }>`
  height: ${p => (p.$hovered ? "20px" : "7px")};
  outline: 2px solid red;
`;

interface Iprops {
  index: number;
}

const Slot: FC<Iprops> = ({ index }) => {
  const [isSlotHovered, setIsSlotHovered] = useState<boolean>(false);

  const handleDragOver = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsSlotHovered(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsSlotHovered(false);
  };

  const handleDrop = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    console.log(index);
  };

  return (
    <EmptyItem
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $hovered={isSlotHovered}
    ></EmptyItem>
  );
};

export default Slot;
