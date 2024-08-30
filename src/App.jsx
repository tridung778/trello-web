import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HomeIcon from "@mui/icons-material/Home";
import pink from "@mui/material/colors/pink";
import TabIndicator from '@mui/material/Tabs';

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
      <TabIndicator/>
    </>
  );
}

export default App;
