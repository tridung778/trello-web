import { Box } from "@mui/material";

const BoradContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: ({ trello }) =>
          `calc(100vh - ${trello.appBarHeight} - ${trello.boardBarHeight})`,
      }}
    >
      Board Content
    </Box>
  );
};

export default BoradContent;
