import { Container } from "@mui/material";
import BoardBar from "./BoardContent/BoardBar/BoardBar";
import BoradContent from "./BoardContent/BoardContent";
import AppBar from "~/components/AppBar/AppBar";
import { useEffect, useState } from "react";
import { fetctBoardDetailsAPI } from "~/apis";

const Board = () => {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "66e27712385edd3fd4e3fee5";

    fetctBoardDetailsAPI(boardId).then((board) => {
      setBoard(board);
    });
  }, []);

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoradContent board={board} />
    </Container>
  );
};

export default Board;
