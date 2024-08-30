import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HomeIcon from "@mui/icons-material/Home";
import pink from "@mui/material/colors/pink";
import TabIndicator from "@mui/material/Tabs";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <div>Tri Dung</div>

      <Typography variant="h6" color="primary">
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
      <TabIndicator />
    </>
  );
}

export default App;
