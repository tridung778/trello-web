import { Container } from "@mui/material";
import BoardBar from "./BoardContent/BoardBar/BoardBar";
import AppBar from "~/components/AppBar/AppBar";
import { useEffect, useState } from "react";
import {
  fetctBoardDetailsAPI,
  createNewColumnAPI,
  createNewCardAPI,
} from "~/apis";
import BoardContent from "./BoardContent/BoardContent";

const Board = () => {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "66e2bbd24e38acea4241074f";

    fetctBoardDetailsAPI(boardId).then((board) => {
      setBoard(board);
    });
  }, [board]);

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id,
    });
    console.log(createdColumn);
  };

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id,
    });
    console.log(createdCard);
  };

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
      />
    </Container>
  );
};

export default Board;
// boardId: 66e294cc9e91753f88c54893
// columnId: 66e296ceaf437ddd63ca8f97
// columnId: 66e297b4af437ddd63ca8f99
