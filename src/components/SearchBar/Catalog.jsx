import React, { useState } from 'react';
import { useGetCategoriesQuery } from '../../redux/apiSlice';
import { Link } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GridViewIcon from '@mui/icons-material/GridView';

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
            }}
          >
            <ListItemIcon>
              <GridViewIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="CATALOGUE" />
            {open ? <ExpandMore /> : <ExpandLess />}
          </ListItemButton>
        </ListSubheader>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map(category => (
            <ListItemButton key={category} sx={{ pl: 5 }}>
              <Link to={`/${category}`} style={{ textDecoration: 'none', color: 'inherit', textTransform:'uppercase' }}>
                <ListItemText primary={category} />
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
