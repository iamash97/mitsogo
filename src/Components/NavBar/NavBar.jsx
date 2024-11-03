import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  Select,
  Switch,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { CURRENCIES_SUPPORTED, useCurrency } from '../../Contexts/CurrencyContext';

const NavigationBar = () => {
  const { currentCurrency, setCurrentCurrency } = useCurrency();
  const [darkMode, setDarkMode] = useState(false);

  const handleCurrencyChange = (event) => {
    setCurrentCurrency({...currentCurrency, language: event.target.value.language, currency: event.target.value.currency, symbol: event.target.value.symbol });
  };
    
  // Implement dark mode functionality here
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="textPrimary">
          Markets
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <SearchOutlinedIcon color="primary" />
          </IconButton>
          <IconButton>
            <MailOutlineIcon color="primary" />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon color="primary" />
          </IconButton>
          <FormControl variant="outlined" sx={{ minWidth: 80, margin: '0 10px' }}>
            <Select
              value={currentCurrency.currency}
              onChange={handleCurrencyChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                '& .MuiSelect-select': {
                  padding: '10px 14px', // Adjust padding for better appearance
                  '&:focus': {
                    backgroundColor: 'transparent', // Remove background on focus
                  },
                },
              }}
            >
              {
                CURRENCIES_SUPPORTED.map((currency) => <MenuItem value={currency}>{`${currency.language}/${currency.currency}`}</MenuItem>)
              }
            </Select>
          </FormControl>
          <Switch checked={darkMode} onChange={handleDarkModeToggle} />
          <IconButton color="primary">
            <ExitToAppIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
