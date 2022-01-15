// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

import React, {useEffect, useState} from 'react'
import {ethers} from 'ethers'


//material ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//button
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//

//web3
import { getWeb3 } from './utils.js.js';
import BetterNFTCollection from './contracts/BetterNFTCollection.json'
import BetterNFTERC721 from './contracts/BetterNFTERC721.json'
//

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const NFTMint = () => {
  //web3
  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  //

  //select
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      // const deployedNetwork = BetterNFTCollection.networks[networkId];

      const contract = new web3.eth.Contract(
          BetterNFTCollection.abi,
          "0x51070A0d6Ab8D72ED84062B930b0eF214B01a538",
      );

      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);
      console.log(accounts);
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });

  }, []);

  async function mintNFT(e){
    e.preventDefault();
    await contract.methods.mint(1).send({from: accounts[0]});
    console.log( 43);

  }

  async function revealNFT(e){
    e.preventDefault();
    await contract.methods.revealCollection().send({from: accounts[0]});
    console.log( 333);

  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Amount</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={amount}
                    label="Amount"
                    onChange={handleChange}
                >

                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Connect Wallet</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Button  onClick = {e => mintNFT(e)} variant="contained">Mint</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Button  onClick = {e => revealNFT(e)} variant="contained">reveal</Button>
                </Stack>
              </FormControl>



            </Item>
          </Grid>
        </Grid>
      </Box>
  );
}

export default NFTMint;