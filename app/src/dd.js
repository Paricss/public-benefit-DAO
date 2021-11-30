import * as React from 'react';
import './assets/css/background.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import logo from './assets/img/Logo2.gif';
import CustomizedProgressBars from './CustomizedProgressBars';
//input filed
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
//input filed

import Button from '@mui/material/Button';

//icon
import TwitterIcon from '@mui/icons-material/Twitter';
//icon

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DD() {

  const [values, setValues] = React.useState({
    amount: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
      <div>

        <Container maxWidth="md">
          {/*<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />*/}



          <Grid container spacing={3} rowSpacing={1} >

            <Grid item xs={12} >
              <Item><h2>All donations will be used for charity</h2></Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <div style={{display:'flex'}}>
                <div style={{margin: '0 20px'}}>
                  <img src={logo} width="200" height="160"/>
                </div>
                <div>
                  <h1>EquityDAO</h1>
                  <TwitterIcon /><span>@WorldEquityDAO</span>
                </div>
              </div>



            </Grid>
            <Grid item xs={8} md={8}>

            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <p>volume: Ξ5,476</p>
                <p>distributed: $505,429</p>

              </Item>
            </Grid>
            <Grid item xs={12} md={6}>

                <FormControl fullWidth sx={{ m: 1,width: '25ch' }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.amount}
                      onChange={handleChange('amount')}
                      startAdornment={<InputAdornment position="start">ETH</InputAdornment>}
                      label="Amount"
                  />
                </FormControl>
                <Button variant="contained">Contribute</Button>
                <p style={{margin:'0 0 0 20px'}}>100 000 $Equity / ETH</p>

            </Grid>
            <Grid item xs={12}>
              <Item>  <CustomizedProgressBars /></Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <h2>What is EquityDAO?</h2>
                <p>EquityDAO is a decentralized autonomous organization.a beautiful experiment in a single-purpose DAO. We now believe this project has run its course.

                  The community has taken all actions that it was organized to accomplish: we raised capital, we bid at Sotheby’s, and upon losing, we made full refunds available to the community as promised.

                  Having lost the auction and following the core team's choice to wind down, we would like to remind you that the tokens possess no rights, governance, or utility other than redeeming them for ethereum from the smart contract held in Juicebox at a ratio of 1,000,000:1—the same ratio at which contributions were made to the initial crowdfund to buy the Constitution.
                </p>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <h2>How to contribute</h2>
                <iframe  src="https://www.youtube.com/embed/OsRIHlr0_Iw"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </Item>
            </Grid>
          </Grid>
          <div>
            <h1>What is DAO?</h1>
            <p style={{margin:'0'}}>A decentralized autonomous organization, sometimes called a decentralized autonomous corporation, is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government.
            </p>
          </div>
        </Container>
      </div>

  );
}

export default DD;
