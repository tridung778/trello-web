import { Container } from "@mui/material";
import BoardBar from "./BoardContent/BoardBar/BoardBar";
import BoradContent from "./BoardContent/BoardContent";
import AppBar from "~/components/AppBar/AppBar";

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoradContent />
    </Container>
  );
};

export default Board;
