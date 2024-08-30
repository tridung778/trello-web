import { Button } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HomeIcon from "@mui/icons-material/Home";
import { pink } from "@mui/material/colors";

function App() {
  return (
    <>
      <div>Tri Dung</div>
      <Button variant="text" color="action">
        Text
      </Button>
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
