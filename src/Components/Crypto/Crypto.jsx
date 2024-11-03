import React from 'react';
import { Box, Typography, Grid, Avatar, LinearProgress } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BitcoinIcon from '@mui/icons-material/CurrencyBitcoin'; 
import DiscordIcon from '@mui/icons-material/Chat'; 
import TwitterIcon from '@mui/icons-material/Twitter';

const data = {
  name: 'Bitcoin',
  symbol: 'BTC',
  price: 29025.99,
  marketCap: 561.87,
  volume: 30.92,
  circulatingSupply: 19.36,
  maxSupply: 31.48,
  totalSupply: 19.36,
  socialFollowing: { discord: 91300, twitter: 91300 },
  socialInteractions: { discord: 12000, twitter: 12000 },
  holders: 4397229,
  sentiment: 'Fear',
  sentimentColor: 'red',
  watchlistCount: 3994278,
  low: 26910.20,
  high: 31481.60,
};

function CryptoOverview() {
  return (
    <Box sx={{ p: 2, borderRadius: 2, boxShadow: 1, overflow: 'auto', marginTop: '1rem' }}>
      <Grid container spacing={1} alignItems="center">
        {/* Header with icon and name */}
        <Grid item xs={12} md={3}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Avatar sx={{ bgcolor: '#F7931A' }}>
                <BitcoinIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                {data.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {data.symbol}
              </Typography>
            </Grid>
            <Grid item>
              <StarIcon color="primary" />
            </Grid>
            <Grid item>
              <BookmarkIcon color="primary" />
            </Grid>
          </Grid>
          <Typography variant="caption" color="text.secondary">
            Rank #1 | On {data.watchlistCount.toLocaleString()} watchlists
          </Typography>
        </Grid>

        {/* Price and Market Cap */}
        <Grid item xs={12} md={2}>
          <Typography variant="h5" fontWeight="bold">
            ${data.price.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="error">
            24h -2.39%
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Market Cap
          </Typography>
          <Typography variant="body2">${data.marketCap.toFixed(2)}B</Typography>
          <Typography variant="body2" color="error">
            24h -9.17%
          </Typography>
        </Grid>

        {/* Volume */}
        <Grid item xs={12} md={2}>
          <Typography variant="body2" fontWeight="bold">
            Volume
          </Typography>
          <Typography variant="body2">${data.volume.toFixed(2)}B</Typography>
          <Typography variant="body2" color="success.main">
            24h +19.23%
          </Typography>
          <Typography variant="body2">CEX Vol: ${data.volume.toFixed(2)}B</Typography>
          <Typography variant="body2">DEX Vol: $21.79M</Typography>
        </Grid>

        {/* Circulating Supply */}
        <Grid item xs={12} md={2}>
          <Typography variant="body2" fontWeight="bold">
            Circulating Supply
          </Typography>
          <Typography variant="body2">{data.circulatingSupply}M BTC</Typography>
          <LinearProgress variant="determinate" value={92} sx={{ height: 8, borderRadius: 2, mt: 1, mb: 1 }} />
          <Typography variant="body2">Max Supply: {data.maxSupply}M</Typography>
          <Typography variant="body2">Total Supply: {data.totalSupply}M</Typography>
        </Grid>

        {/* Social Following and Interactions */}
        <Grid item xs={12} md={1.5}>
          <Typography variant="body2" fontWeight="bold">
            Social Following
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <DiscordIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography>{data.socialFollowing.discord.toLocaleString()}</Typography>
              <Typography variant="body2" color="success.main">+2.35%</Typography>
            </Grid>
            <Grid item>
              <TwitterIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography>{data.socialFollowing.twitter.toLocaleString()}</Typography>
              <Typography variant="body2" color="success.main">+2.35%</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Holders and Sentiment */}
        <Grid item xs={12} md={2}>
          <Typography variant="body2" fontWeight="bold">
            Holders
          </Typography>
          <Typography>{data.holders.toLocaleString()}</Typography>
          <Typography variant="body2" color="error">-0.004%</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" fontWeight="bold">Sentiment</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography color={data.sentimentColor}>{data.sentiment}</Typography>
              <Box
                sx={{
                  ml: 1,
                  height: 8,
                  width: 100,
                  bgcolor: data.sentimentColor,
                  borderRadius: 1
                }}
              />
            </Box>
            <Typography variant="caption" color="text.secondary">
              Based on data from May 17, 2023 at 13:41
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CryptoOverview;
