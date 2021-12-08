import React from "react";

import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from "@drizzle/react-plugin";
import drizzleOptions from "./drizzleOptions";

import LoadingContainer from './LoadingContainer.js';
import ICOInfo from './ICOInfo.js';
import Investor from './Investor.js';
import Admin from './Admin.js';
import seaLifeCenter from './assets/img/seaLifeCenter.jpg';
import AAPI from './assets/img/AAPI.jpg';
// Mui container
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//

//Mui grid
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from "./assets/img/Logo2.gif";
import {Button} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

function Vote() {
  return (
      <div className="container">

        <DrizzleProvider drizzle={drizzle}>
          <LoadingContainer>
            <Container maxWidth="md">
              <h1>Vote</h1>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <h3>Alaska Sealife Center Donation</h3>
                      <img src={seaLifeCenter} width="300" height="220"/>
                      <h4> 20 Ξ </h4>
                      <Button>Vote</Button>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <h3>Stop AAPI Hate</h3>
                      <img src={AAPI} width="300" height="220"/>
                      <h4> 30 Ξ </h4>
                      <Button>Vote</Button>
                    </Item>
                  </Grid>

                </Grid>
              </Box>
            </Container>
          </LoadingContainer>
        </DrizzleProvider>
      </div>
  );
}

export default Vote;
