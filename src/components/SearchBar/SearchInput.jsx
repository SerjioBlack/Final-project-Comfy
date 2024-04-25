import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const loginUser = async () => {
  const response = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      username: 'mor_2314',
      password: '83r5^_'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data.token;
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(3),
  
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: '0',
  color: 'green',
  backgroundColor: 'white',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      width: '530px',
    },
  },
}));

export default function SearchInput() {
  const [open, setOpen] = React.useState(false);
  const [loginData, setLoginData] = React.useState({ username: 'mor_2314', password: '83r5^_' });
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleLoginClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleLoginSubmit = () => {
    loginUser().then(token => {
      if (token) {
        setSnackbarOpen(true);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'success.main', pr: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Search color='success'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase sx={{ width: { xs: '200px', md: '600px' } }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" style={{ whiteSpace: 'nowrap', borderColor: 'white', color: 'white' }} onClick={handleLoginClick}>Log In</Button>
            </Stack>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <BalanceIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
            <p>Cart</p>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal for Login */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          minWidth: '300px',
          maxWidth: '400px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <TextField
            label="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            type="password"
            sx={{ mt: 2 }}
          />
          <Button variant="outlined" onClick={handleLoginSubmit} sx={{ mt: 2 }}>Log In</Button>
        </Box>
      </Modal>

      {/* Snackbar for Successful Login */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          User logged in successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}
