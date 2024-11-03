import React from 'react';
import { Typography } from '@mui/material';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useCurrency } from '../../../Contexts/CurrencyContext';
import { formatCurrency } from '../../../utils/currencyUtils';
import './styles.css';

const UserProfile = ({ user }) => {
  const { currentCurrency, currencies } = useCurrency();
  return (
    <>
      <div className="user-profile">
      <img src={user.photo} alt={`${user.name}'s profile`} className="user-photo" />
      <Typography variant='h6' fontWeight={'fontWeightBold'} className="user-name">{user.name}</Typography>
      <div className="verified-status">
          <Typography variant='body2'>Verified</Typography>
          <VerifiedOutlinedIcon sx={{ color: 'green'}} />
      </div>
      </div>
      <div className='balance'>
      <Typography fontWeight={'fontWeightBold'} variant='h6'>Total Balance</Typography>
      <div className='balance-pl'>
      <Typography fontWeight={'fontWeightBold'} variant='h6'>{`${formatCurrency((user.balance * currencies[currentCurrency.currency]), currentCurrency.currency, currentCurrency.locale) }`}</Typography>
      <Typography variant='body2' fontWeight={'fontWeightBold'} className={user.pl.charAt(0) === '+' ? 'profit' : 'loss'}>{user.pl}</Typography>
      </div>
    </div>
  </>
  );
};

export default UserProfile;
