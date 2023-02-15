import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.boardColor};
  padding-top: 10px;
  padding: 20px 10px;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Area = styled.div<IAreaProps>`
  //background-color: ${(props) => (props.isDraggingOver ? "pink" : "blue")};
  background-color: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.draggingFromThisWith
      ? "red"
      : "blue"};
  transition: background-color 0.3s ease-in-out;
  flex-grow: 1;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} index={index} toDo={toDo} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
