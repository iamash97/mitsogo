import React from "react";
import { Box, Typography } from "@mui/material";
import { useCurrency } from "../../Contexts/CurrencyContext";
import { formatCurrency, formatInteractions } from "../../utils/currencyUtils";

export default function Numbers({ trend, unit }) {
    const trendColor = trend.pl[0] === '+' ? 'green' : 'red';
    const { currentCurrency, currencies } = useCurrency();

    const price = unit === 'Currency' ? `${formatCurrency((trend.price * currencies[currentCurrency.currency]), currentCurrency.currency, currentCurrency.locale) }` : formatInteractions(trend.price);
    return (
        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
        <Box
            sx={{
            backgroundColor: 'grey.300',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <Typography
            variant="caption"
            sx={{
                color: 'black',
                fontSize: '0.75rem',
                margin: 0,
                padding: 0,
            }}
            >
            {trend.timeline}
            </Typography>
        </Box>
        <Box sx={{ marginLeft: 1 }}>
            <Typography variant="body2" sx={{ display: 'block' }}>
            {price}
            </Typography>
            <Typography variant="body2" sx={{ display: 'block', color: trendColor }}>
            {trend.pl} 
            </Typography>
        </Box>
        </Box>
    )
}