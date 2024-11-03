import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { CURRENCIES_SUPPORTED, useCurrency } from '../../Contexts/CurrencyContext';
import PopperHelper from '../PopperHelper/PopperHelper';

const NavigationBar = ({heading}) => {
  const { loading, currentCurrency, setCurrentCurrency } = useCurrency();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleCurrencyChange = (event) => {
    setCurrentCurrency({...currentCurrency, language: event.target.value.language, currency: event.target.value.currency, symbol: event.target.value.symbol, locale: event.target.value.locale });
  };

  if(loading) {
    return <></>
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: 'black' }}>
        <Typography variant="h5" color="textPrimary">
          {heading}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <SearchOutlinedIcon onClick={handleClick} />
          </IconButton>
          <IconButton>
            <MailOutlineIcon onClick={handleClick} />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon onClick={handleClick} />
          </IconButton>
          <Select
            defaultValue={`${currentCurrency.language}/${currentCurrency.currency}`}
            onChange={handleCurrencyChange}
            inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                minWidth: 100, margin: '0 10px'
              }}
          >
            { CURRENCIES_SUPPORTED.map((currency) => <MenuItem key={currency.language} value={currency}>{`${currency.language}/${currency.currency}`}</MenuItem>) }
          </Select>
          <Switch onChange={handleClick} />
          <IconButton >
            <ExitToAppIcon onClick={handleClick} />
          </IconButton>
          <PopperHelper id={id} open={open} anchorEl={anchorEl} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
