import React, {useEffect, useState} from "react";
import { getWeb3 } from './utils.js';
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
import VoteContract from './contracts/Vote.json';
import HumanToken from "./contracts/HumanToken.json";

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
  const [voteNum1, setVoteNum1] = useState(0);
  const [voteNum2, setVoteNum2] = useState(0);
  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [testValue, setTestValue] = useState(undefined);
  const [choice, setChoice] = useState(undefined);
  const [result, setResult] = useState(undefined);


  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = VoteContract.networks[networkId];

      const contract = new web3.eth.Contract(
          VoteContract.abi,
          "0x177B0bd8C88D66ec82D5fcea900afD6EF58a73E0",
      );


      // setVoteNum2(async ()=>{
      //   // e.preventDefault();
      //   return await contract.methods.getNum(1).call();
      // });
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);

      const voteNum1 = await contract.methods.getNum(0).call();
      const voteNum2 = await contract.methods.getNum(1).call();
      setVoteNum1(voteNum1);
      setVoteNum2(voteNum2);
    }
    init();
    window.ethereum.on('accountsChanged', accounts => {
      setAccounts(accounts);
    });

  }, []);


  async function vote1(e){
    e.preventDefault();
     await contract.methods.vote(0).send({from: accounts[0]});
  }

  async function vote2(e){
    e.preventDefault();
    await contract.methods.vote(1).send({from: accounts[0]});
  }

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
                      <h4>Fund needed: 20 Ξ </h4>
                      <p>Number of votes:{voteNum1}</p>
                      <Button  onClick = {e => vote1(e)}>Vote</Button>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <h3>Stop AAPI Hate</h3>
                      <img src={AAPI} width="300" height="220"/>
                      <h4> 30 Ξ </h4>
                      <p>Number of votes:{voteNum2}</p>
                      <Button onClick = {e => vote2(e)}>Vote</Button>
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
