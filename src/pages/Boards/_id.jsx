import { Container } from "@mui/material";
import BoardBar from "./BoardContent/BoardBar/BoardBar";
import AppBar from "~/components/AppBar/AppBar";
import { useEffect, useState } from "react";
import {
  fetctBoardDetailsAPI,
  createNewColumnAPI,
  createNewCardAPI,
  updateBoardDetailsAPI,
} from "~/apis";
import BoardContent from "./BoardContent/BoardContent";
import { isEmpty } from "lodash";
import { generatePlaholderCard } from "~/utils/formatters";

const Board = () => {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "66e2bbd24e38acea4241074f";

    fetctBoardDetailsAPI(boardId).then((board) => {
      board.columns.forEach((column) => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaholderCard(column)];
          column.cardOrderIds = [generatePlaholderCard(column)._id];
        }
      });
      setBoard(board);
    });
  }, []);

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id,
    });

    createdColumn.cards = [generatePlaholderCard(createdColumn)];
    createdColumn.cardOrderIds = [generatePlaholderCard(createdColumn)._id];

    const newBoard = { ...board };
    newBoard.columns.push(createdColumn);
    newBoard.columnOrderIds.push(createdColumn._id);
    setBoard(newBoard);
  };

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id,
    });
    const newBoard = { ...board };
    const columnToUpdate = newBoard.columns.find(
      (column) => column._id === createdCard.columnId
    );
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard);
      columnToUpdate.cardOrderIds.push(createdCard._id);
      setBoard(newBoard);
    }
  };

  const moveColumns = async (dndOrderedColumns) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);

    const newBoard = { ...board };
    newBoard.columns = dndOrderedColumns;
    newBoard.columnOrderIds = dndOrderedColumnsIds;
    setBoard(newBoard);

    await updateBoardDetailsAPI(board._id, {
      columnOrderIds: newBoard.columnOrderIds,
    });
  };

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumns={moveColumns}
      />
    </Container>
  );
};

export default Board;
// boardId: 66e294cc9e91753f88c54893
// columnId: 66e296ceaf437ddd63ca8f97
// columnId: 66e297b4af437ddd63ca8f99
