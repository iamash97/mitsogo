import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function Token({ trend }) {
    return (
        <Box display="flex" alignItems="center">
        <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
        <Typography variant="body2" color="white">{trend.tokenName.charAt(0)}</Typography>
        </Avatar>
        <Box>
        <Typography variant="body2">{trend.tokenName}</Typography>
        <Typography variant="body2" color="grey">{trend.symbol}</Typography>
        </Box>
    </Box>
    )
}