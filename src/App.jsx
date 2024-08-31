import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HomeIcon from "@mui/icons-material/Home";
import { pink } from "@mui/material/colors";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useColorScheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModeSelect() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <>
      <ModeSelect />
      <hr />
      <div>Tri Dung</div>

      <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        blanditiis accusantium temporibus dolor quas ullam id quia laborum
        delectus iste voluptate nostrum consequuntur vitae possimus. Qui
        dignissimos similique esse natus!
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <br />
      <HomeIcon sx={{ color: pink[100] }} />
    </>
  );
}

export default App;
