import {
  Badge,
  Box,
  Button,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ModeSelect from "../ModeSelect";

import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/Profile";

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: ({ trello }) => trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "primary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AppsIcon fontSize="large" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            variant="span"
            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search ..."
          type="search"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
       < Profile/>
      </Box>
    </Box>
  );
};

export default AppBar;
