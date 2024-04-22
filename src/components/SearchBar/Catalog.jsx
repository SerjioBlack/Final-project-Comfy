import React, { useState } from 'react';
import { useGetCategoriesQuery } from '../../redux/apiSlice';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import GridViewIcon from '@mui/icons-material/GridView';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import BlenderIcon from '@mui/icons-material/Blender';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WatchIcon from '@mui/icons-material/Watch';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import RoofingIcon from '@mui/icons-material/Roofing';
import SpeakerIcon from '@mui/icons-material/Speaker';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CountertopsIcon from '@mui/icons-material/Countertops';

export default function Catalog() {
  const [open, setOpen] = useState(true);
  const { data: categories = [], error, isLoading } = useGetCategoriesQuery();

  const handleClick = () => {
    setOpen(!open);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <ListItemButton
            variant="contained"
            onClick={handleClick}
            sx={{
              height: 65,
              bgcolor: 'success.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'success.main !important'
              }
            }}
          >
            <ListItemIcon>
              <GridViewIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Catalogue" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListSubheader>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map(category => (
            <ListItemButton key={category} sx={{ pl: 4 }}>
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
