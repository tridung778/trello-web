import { Container } from "@mui/material";
import BoardBar from "./BoardContent/BoardBar/BoardBar";
import BoradContent from "./BoardContent/BoardContent";
import AppBar from "~/components/AppBar/AppBar";
import { mockData } from "~/apis/mock-data";

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoradContent board={mockData?.board} />
    </Container>
  );
};

export default Board;
