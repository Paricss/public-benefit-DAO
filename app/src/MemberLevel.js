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
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}>
              <h2>Shark</h2>
              <img width="80%" src={levelWhale}/>
            </Item>
            <h4>Hold 10 NFTs</h4>
            <p>👌 Membership of BetterDAO - Whale</p>
            <p>👌 Membership of SeaLife Center</p>
            <p>👌 $Better whitelist </p>
            <p>👌 $Better Airdrop Lv4 </p>
            <p>👌 Adopt an animal in the center</p>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}>
              <h2>Shark</h2>
              <img width="80%" src={levelShark}/>
            </Item>
            <h4>Hold 5 NFTs</h4>
            <p>👌 Membership of BetterDAO - Shark</p>
            <p>👌 Membership of SeaLife Center</p>
            <p>👌 $Better whitelist </p>
            <p>👌 $Better Airdrop Lv3 </p>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}> <h2>Turtle</h2><img width="80%" src={levelTurtle}/>
            </Item>
            <h4>Hold 2 NFTs</h4>
            <p>👌 Membership of BetterDAO- Turtle</p>
            <p>👌 Membership of SeaLife Center</p>
            <p>👌 $Better whitelist </p>
            <p>👌 $Better Airdrop Lv2 </p>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Item style={{ background: 'transparent', boxShadow: 'none'}}><h2>Squid</h2> <img width="80%" src={levelSquid}/>
            </Item>
            <h4>Hold 1 NFTs</h4>
            <p>👌 Membership of BetterDAO - Squid </p>
            <p>👌 $Better whitelist</p>
            <p>👌 $Better Airdrop Lv1 </p>
          </Grid>
        </Grid>
      </div>
  );
}

export default MemberLevel;
