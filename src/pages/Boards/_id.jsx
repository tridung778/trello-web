import { Container } from "@mui/material";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoradContent from "./BoradContent";

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
