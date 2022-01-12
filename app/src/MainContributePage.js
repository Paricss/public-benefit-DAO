import * as React from 'react';
import './assets/css/background.css';
import './assets/css/mainPage.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import roadmap from './assets/img/roadmap.png';
import projectDiagram from './assets/img/projectDiagram.png';
import projectDiagram2 from './assets/img/projectDiagram2.png';

import bgVideo from './assets/img/bgVideo.mp4';
import CustomizedProgressBars from './CustomizedProgressBars';
import MemberLevel from "./MemberLevel";
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

//drizzle
// import { Drizzle } from '@drizzle/store';
// import { drizzleReactHooks } from "@drizzle/react-plugin";
// import drizzleOptions from "./drizzleOptions";
import LoadingContainer from "./LoadingContainer";
import Investor from "./Investor";
import FundCarousel from "./FundCarousel";

//form
// import { styled } from "@mui/material/styles";

// import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  label:{
    color:"white"
  },
  input:{
    color: "white"
  },
  "& label.Mui-focused": {
    color: "white"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white"
    },
    // "&:hover fieldset": {
    //   borderColor: "blue"
    // }
    // "&.Mui-focused fieldset": {
    //   borderColor: "green"
    // }
  }
});
//

// const drizzle = new Drizzle(drizzleOptions);
// const { DrizzleProvider } = drizzleReactHooks;
//

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MainContributePage() {

  const [values, setValues] = React.useState({
    amount: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  return (
      <div>



        <Container maxWidth="lg">
          {/*<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />*/}


          {/*<h2 ><a href="/rockPaperScissors">Game</a></h2>*/}
          {/*<h2 ><a href="/vote">Vote</a></h2>*/}
          <Grid container spacing={3} rowSpacing={1} >

            <br/>
            <br/>
            {/*<Grid item xs={12} >*/}
              {/*<Item><h2>We are gonna make world better!</h2></Item>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4} md={4}>*/}
            {/*  <div style={{display:'flex'}}>*/}
            {/*    <div style={{margin: '0 20px'}}>*/}
            {/*      <img src={logo} width="140" height="140"/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <h1>BetterDAO</h1>*/}
            {/*      <a href="https://twitter.com/BetterDAO"><TwitterIcon /> <span>@BetterDAO</span></a>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</Grid>*/}
            <Grid item xs={8} md={8}>

            </Grid>

            <Grid item xs={12} md={6}>
            {/*  <Item style={{ background: 'transparent',boxShadow: 'none'}}>*/}
            {/*  <Grid item xs={12} md={12} >*/}
            {/*    <h2 className="buyComponentMargin wordColor">End Time:</h2>*/}
            {/*    <p className="wordColor">Jan 01 2022</p>*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={12} md={12}>*/}
            {/*    <h2 className="buyComponentMargin wordColor">Volume:</h2>*/}
            {/*    <p className="wordColor">Ξ 324.00</p>*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={12} md={12}>*/}
            {/*    <h2 className="buyComponentMargin wordColor">$Better Address:</h2>*/}
            {/*    <p className="wordColor">0xDFc8475f43516133D79694C0E8670A73BEc7Fb09</p>*/}
            {/*  </Grid>*/}
            {/*   <div className="buyComponentMargin"><CustomizedProgressBars /></div>*/}
            {/*    <br/>*/}

            {/*    <CssTextField label="ETH" id="custom-css-outlined-input" />*/}

            {/*    /!*<Button variant="contained">*!/*/}
            {/*    /!*  <DrizzleProvider drizzle={drizzle} >*!/*/}
            {/*    /!*  <LoadingContainer>*!/*/}
            {/*    /!*    /!*<ICOInfo />*!/*!/*/}
            {/*    /!*    <Investor values ={values.amount}/>*!/*/}
            {/*    /!*    /!*<Admin />*!/*!/*/}
            {/*    /!*  </LoadingContainer>*!/*/}
            {/*    /!*  </DrizzleProvider>*!/*/}
            {/*    /!*</Button>*!/*/}
            {/*    <p style={{margin:'0 0 0 20px' ,color:'white'}}>100 000 $Better / ETH</p>*/}
            {/*  </Item>*/}
              <Item  style={{ background: 'transparent',boxShadow: 'none'}}>
               {/*<div className="description" style={{ boxShadow: 'none'}}>*/}
               {/*  <h2>What does BetterDAO do?</h2>*/}
               {/*  <p>BetterDAO is decentralized The Nobel Prize. BetterDAO builds a bridge to members between scientists, developers, artists and so on. For example, people get options to share part of their Intellectual Properties in the form of NFT with BetterDAO members for funds.</p>*/}
               {/*  <h2>The First Step </h2>*/}
               {/*  <p>We are so glad to cooperate with Alaska SeaLife Center which is a non-profit research institution. Every NFT minted from our DAO records what holders donate to Alaska SeaLife Center. Another interesting thing is that minter can get the membership of SeaLife Center and BetterDAO, which contains many benefits.</p>*/}
               {/*  <h2>When</h2>*/}
               {/*  <h5> NFT Minting will launch in January 2022. </h5>*/}
               {/*  <h5> DAO will launch after NFT Minting.</h5>*/}
               {/*</div>*/}
                <div className="announcement">
                  <h1>Better Creature NFT</h1>
                  <p>By BetterDAO - minting early 2022</p>
                  <Button variant="contained">Mint</Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item  style={{ background: 'transparent',boxShadow: 'none'}}>
                <FundCarousel />
              </Item>
            </Grid>
            <Grid item xs={12} >
              <Item  className="gapMargin">
                <h2 style={{padding:"20px"}}>🤲 We are gonna make the world better. 🌏</h2>
              </Item>
            </Grid>
            <div style={{margin:'25px'}}></div>
            <MemberLevel className='mainPage'/>

            <Grid item xs={12} >
              <Item  className="gapMargin">
                <h2 >Get to know our project</h2>
              </Item>
            </Grid>
          </Grid>

          <div className="gapMargin">
            {/*<h1>What is DAO?</h1>*/}
            {/*<p style={{margin:'0'}}>A decentralized autonomous organization, sometimes called a decentralized autonomous corporation, is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government.*/}
            {/*</p>*/}
            {/*<p style={{margin:'0'}}>A decentralized autonomous organization, sometimes called a decentralized autonomous corporation, is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government.*/}
            {/*</p>*/}
            {/*<p style={{margin:'0'}}>A decentralized autonomous organization, sometimes called a decentralized autonomous corporation, is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members and not influenced by a central government.*/}
            {/*</p>*/}
          </div>

        </Container>


        <div className='mainPage'>
          <Container maxWidth="lg">


            <Grid container spacing={3} rowSpacing={1} >

              <Grid item xs={12} md={6} >
                <Item style={{ background: 'transparent', boxShadow: 'none'}} className="gapMargin">
                  <h2>How BetterDAO Launches</h2>
                  <img width="100%" src={projectDiagram}/>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} >
                <Item style={{ background: 'transparent', boxShadow: 'none'}} className="gapMargin">
                  <h2>How BetterDAO works</h2>
                  <img width="100%" src={projectDiagram2}/>
                </Item>
              </Grid>
              {/*<Grid item xs={12} md={6}>*/}
              {/*  <Item style={{ background: 'transparent', boxShadow: 'none'}} className="gapMargin">*/}
              {/*    <h2>How to contribute</h2>*/}
              {/*    <iframe width="70%" height="250" src="https://www.youtube.com/embed/OsRIHlr0_Iw"*/}
              {/*            title="YouTube video player" frameBorder="0"*/}
              {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
              {/*            allowFullScreen></iframe>*/}
              {/*  </Item>*/}
              {/*</Grid>*/}
            </Grid>

              <Grid item xs={12} md={12} >
                <Item style={{ background: 'transparent', boxShadow: 'none'}} className="gapMargin">
                  <h3 style={{margin:"30px"}}>BetterDAO</h3>
                  <p>© Copyright 2021, Better DAO. All Rights Reserved.</p>

                </Item>
              </Grid>
          </Container>
        </div>
        {/*<div className="video-container">*/}
        {/*<iframe*/}
        {/*    className="iframe-bg"*/}
        {/*    src="https://www.youtube.com/embed/DUw2b79Jh4M?&autoplay=1&mute=1&loop=1&playlist=DUw2b79Jh4M" title="YouTube video player"*/}
        {/*        frameBorder="0"*/}
        {/*        allow="accelerometer; autoplay; loop;clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*        allowFullScreen></iframe>*/}
        {/*</div>*/}
        <video src={bgVideo} autoPlay loop playsInline muted></video>
      </div>

  );
}

export default MainContributePage;
