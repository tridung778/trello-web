/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import Column from "./Column/Column";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const ListColumns = ({ columns }) => {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      {columns?.map((column) => (
        <Column key={column._id} column={column}/>
      ))}
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          bgcolor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
            pl: 2.5,
            py: 1,
          }}
        >
          Add new Column
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumns;
