import React, { useState } from 'react';
import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const items = [
  { id: 1, text: 'Markets', icon: <SignalCellularAltIcon /> },
  { id: 2, text: 'Watchlist', icon: <RemoveRedEyeOutlinedIcon /> },
  { id: 3, text: 'AI Trasing Bots', icon: <SmartToyOutlinedIcon /> },
  { id: 4, text: 'Wallet', icon: <AccountBalanceWalletOutlinedIcon /> },
  { id: 5, text: 'Guides', icon: <LocalOfferOutlinedIcon /> },
  { id: 6, text: 'Community', icon: <PeopleAltOutlinedIcon /> },
  { id: 7, text: 'Support', icon: <FavoriteBorderOutlinedIcon /> },
];

export default function Menu() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => handleSelect(item.id)}
          sx={{
            cursor: 'pointer',
            backgroundColor: selectedId === item.id ? 'blue' : 'transparent',
            color: selectedId === item.id ? 'white' : 'black',
            '&:hover': {
              backgroundColor: selectedId === item.id ? 'darkblue' : 'lightgray',
            },
            width: '90%',
            margin: 'auto'
          }}
        >
            <ListItemIcon>
                {React.cloneElement(item.icon, { sx: { color: selectedId === item.id ? 'white' : 'inherit' } })}
            </ListItemIcon>
            <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

