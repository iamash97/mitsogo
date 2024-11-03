import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Select,
  Switch,
  Popper,
  styled,
  css,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { CURRENCIES_SUPPORTED, useCurrency } from '../../Contexts/CurrencyContext';
import { grey } from '../../utils/constants';

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
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <StyledPopperDiv>This feature is currently under development. We're working hard to bring it to you soon!</StyledPopperDiv>
          </Popper>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const StyledPopperDiv = styled('div')(
  ({ theme }) => css`
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: ${theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`};
    padding: 0.75rem;
    color: ${theme.palette.mode === 'dark' ? grey[100] : grey[700]};
    font-size: 0.875rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    opacity: 1;
    margin: 0.25rem 0;
  `,
);


export default NavigationBar;
