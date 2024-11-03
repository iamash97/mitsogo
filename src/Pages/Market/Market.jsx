import React from 'react';
import { Grid2 } from '@mui/material';
import Trends from '../../Components/Trends/Trends';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CryptoOverview from '../../Components/Crypto/Crypto';
import './styles.css'; 

const TRENDS = [
  {
    trendName: "Top 5 Social Activity",
    logo: <PeopleAltRoundedIcon />,
    column1: 'TOKENS',
    column2: 'INTERACTIONS',
    unit: 'Number',
    tokens: [
      {
        tokenName: 'Kava',
        symbol: 'KAVA',
        timeline: '7d',
        price: 64,
        pl: '+255.56%'
      },
      {
        tokenName: 'Cardano',
        symbol: 'ADA',
        timeline: '7d',
        price: 5060,
        pl: '+49.28%'
      },
      {
        tokenName: 'Trust Walleet Token',
        symbol: 'TWT',
        timeline: '7d',
        price: 26380,
        pl: '+13.78%'
      },
      {
        tokenName: 'Ethereum Classic',
        symbol: 'ETC',
        timeline: '7d',
        price: 256,
        pl: '+10.34%'
      },
      {
        tokenName: 'Monero',
        symbol: 'XMR',
        timeline: '7d',
        price: 1990,
        pl: '+9.57%'
      },
    ]
  },
  {
    trendName: "Top 5 Volume",
    logo: <PeopleAltRoundedIcon />,
    column1: 'EXCHANGE',
    column2: 'VOLUME',
    unit: 'Currency',
    tokens: [
      {
        tokenName: 'Binance',
        timeline: '24h',
        price: 11820000000,
        pl: '-4.87%'
      },
      {
        tokenName: 'Gate.lo',
        timeline: '24h',
        price: 976920000,
        pl: '-3.44%'
      },
      {
        tokenName: 'Coinbase Exchange',
        timeline: '24h',
        price: 1460000000,
        pl: '-9.09%'
      },
      {
        tokenName: 'LBank',
        timeline: '24h',
        price: 1460000000,
        pl: '+13.11%'
      },
      {
        tokenName: 'MEXC Global',
        timeline: '24h',
        price: 946820000,
        pl: '-12.53%'
      },
    ]
  },
  {
    trendName: "Top 5 Gainers ",
    logo: <PeopleAltRoundedIcon />,
    column1: 'TOKEN',
    column2: 'TOTAL GAIN',
    unit: 'Currency',
    tokens: [
      {
        tokenName: 'ADAUP',
        symbol: 'ADAUP',
        timeline: '24h',
        price: 0.503,
        pl: '+22.38%'
      },
      {
        tokenName: 'Injective',
        symbol: 'INJ',
        timeline: '24h',
        price: 8.988,
        pl: '+22.13%'
      },
      {
        tokenName: 'Band Protocol',
        symbol: 'BAND',
        timeline: '24h',
        price: 1.726,
        pl: '+20.73%'
      },
      {
        tokenName: 'COTI',
        symbol: 'COTI',
        timeline: '24h',
        price: 0.08018,
        pl: '+18.35%'
      },
      {
        tokenName: 'Conflux',
        symbol: 'CFX',
        timeline: '24h',
        price: 0.321,
        pl: '+17.84%'
      },
    ]
  },
  {
    trendName: "Top 5 Losers",
    logo: <PeopleAltRoundedIcon />,
    column1: 'TOKEN',
    column2: 'TOTAL LOSS',
    unit: 'Currency',
    tokens: [
      {
        tokenName: 'ARPA Chain',
        symbol: 'ARPA',
        timeline: '24h',
        price: 0.05045,
        pl: '-9.06%'
      },
      {
        tokenName: 'Klaytn',
        symbol: 'KLAY',
        timeline: '24h',
        price: 0.1730,
        pl: '-6.49%'
      },
      {
        tokenName: 'Etherrnity Chain',
        symbol: 'ERN',
        timeline: '24h',
        price: 1.853,
        pl: '-5.12%'
      },
      {
        tokenName: 'FC Porto Fan Token',
        symbol: 'PORTO',
        timeline: '24h',
        price: 2.3739,
        pl: '-1.98%'
      },
      {
        tokenName: 'Orion Protocol',
        symbol: 'ORN',
        timeline: '24h',
        price: 1.0530,
        pl: '-1.89%'
      },
    ]
  }
];

  function Market() {
  return (
    <div className="market">
        <Grid2 container spacing={0}>
            <Grid2 size={{ xs: 12, md: 12 }} sx={{display: 'flex'}}>
              { TRENDS && TRENDS.map((trend) => <Trends trends={trend} /> )}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} >
              <CryptoOverview />
            </Grid2>
        </Grid2>
    </div>
  );
};

export default Market;
