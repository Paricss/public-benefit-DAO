import React from "react";
import { styled } from '@mui/material/styles';
import './assets/css/background.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//img
import levelPenguin from './assets/img/levelPenguin.png';
import levelSquid from './assets/img/levelSquid.png';
import levelShark from './assets/img/levelShark.png';
import levelWhale from './assets/img/levelWhale.png';
import levelTurtle from './assets/img/levelTurtle.png';
//

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function MemberLevel() {
  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} lg={3}  style={{ background: 'white'}}>
            <Item  style={{ background: 'transparent', boxShadow: 'none'}}>
              <h2>Whale</h2>
              <img width="80%" src={levelWhale}/>

            </Item>
            <p>👌$Better Token</p>
            <p>👌BetterDAO NFT Collection</p>
            <p>👌Animal Adoption NFT</p>
            <p>👌Membership</p>
            <p>👌VIP Tour</p>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}>
              <h2>Shark</h2>
              <img width="80%" src={levelShark}/>
            </Item>
            <p>👌$Better Token</p>
            <p>👌BetterDAO NFT Collection</p>
            <p>👌Animal Adoption NFT</p>
            <p>👌Membership</p>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}> <h2>Turtle</h2><img width="80%" src={levelTurtle}/>
            </Item>
            <p>👌$Better Token</p>
            <p>👌BetterDAO NFT Collection</p>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}><h2>Squid</h2> <img width="80%" src={levelSquid}/>
            </Item>
            <p>👌$Better Token</p>
          </Grid>
        </Grid>
      </div>
  );
}

export default MemberLevel;
