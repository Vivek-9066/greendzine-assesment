import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function BottomMenu() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', width: '100vw', justifyContent: 'space-between' }}>
      <BottomNavigation 
        sx={{marginLeft:"3px",flexBasis: '50%',borderRadius:"25px", background:"#38383880 0% 0% no-repeat padding-box", maxWidth: '50%' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/dashboard">
        <BottomNavigationAction icon={<HomeIcon sx={{color:"#36A546"}}/>} />
        </Link>
      </BottomNavigation>
      <BottomNavigation 
        sx={{margin:"0px 3px", flexBasis: '50%',border: "1px solid #000000", borderRadius:"25px", opacity: 1,
         background:"#38383880 0% 0% no-repeat padding-box", maxWidth: '50%' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
         <Link to="/employee-list">
        <BottomNavigationAction icon={<PersonIcon sx={{color:"#36A546"}} />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
