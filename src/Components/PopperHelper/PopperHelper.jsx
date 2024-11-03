import React from "react";
import { grey } from "../../utils/constants";
import { css, Popper, styled } from "@mui/material";

export default function PopperHelper({id, open, anchorEl }) {
    return (
        <Popper id={id} open={open} anchorEl={anchorEl}>
            <StyledPopperDiv>This feature is currently under development. We're working hard to bring it to you soon!</StyledPopperDiv>
        </Popper>
    );
}

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
  