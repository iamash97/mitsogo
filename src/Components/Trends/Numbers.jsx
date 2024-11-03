import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function Numbers({ trend }) {
    const trendColor = trend.pl[0] === '+' ? 'green' : 'red';
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
            {trend.price}
            </Typography>
            <Typography variant="body2" sx={{ display: 'block', color: trendColor }}>
                {trend.pl} 
            </Typography>
        </Box>
        </Box>
    )
}