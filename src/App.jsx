import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
  Box,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <LightModeIcon fontSize="small" />
            Light
          </div>
        </MenuItem>
        <MenuItem value={"dark"}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <DarkModeIcon fontSize="small" />
            Dark
          </div>
        </MenuItem>
        <MenuItem value={"system"}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: ({ trello }) => trello.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: ({ trello }) => trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
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
    </Container>
  );
}

export default App;
