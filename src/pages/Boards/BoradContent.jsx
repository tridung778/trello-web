import { Box } from "@mui/material";

const BoradContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: ({ trello }) =>
          `calc(100vh - ${trello.appBarHeight} - ${trello.boardBarHeight})`,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      Board Content
    </Box>
  );
};

export default BoradContent;
