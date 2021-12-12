import * as React from 'react';
import './assets/css/background.css';
import './assets/css/mainPage.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import logo from './assets/img/earthLogo.png';
import bgVideo from './assets/img/bgVideo.mp4';
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

//drizzle
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from "@drizzle/react-plugin";
import drizzleOptions from "./drizzleOptions";
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

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;
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
              <Item style={{ background: 'transparent',boxShadow: 'none'}}>
              <Grid item xs={12} md={12} >
                <h2 className="buyComponentMargin wordColor">End Time:</h2>
                <p className="wordColor">Jan 01 2022</p>
              </Grid>
              <Grid item xs={12} md={12}>
                <h2 className="buyComponentMargin wordColor">Volume:</h2>
                <p className="wordColor">Ξ 324.00</p>
              </Grid>
              <Grid item xs={12} md={12}>
                <h2 className="buyComponentMargin wordColor">$Better Address:</h2>
                <p className="wordColor">0xasdasdas1314546asd123as1d3</p>
              </Grid>
               <div className="buyComponentMargin"><CustomizedProgressBars /></div>
                <br/>

                <CssTextField label="ETH" id="custom-css-outlined-input" />

                <Button variant="contained"><DrizzleProvider drizzle={drizzle} >
                  <LoadingContainer>
                    {/*<ICOInfo />*/}
                    <Investor values ={values.amount}/>
                    {/*<Admin />*/}
                  </LoadingContainer>
                  </DrizzleProvider>
                </Button>
                <p style={{margin:'0 0 0 20px' ,color:'white'}}>100 000 $Better / ETH</p>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item  style={{ background: 'transparent',boxShadow: 'none'}}>
                <FundCarousel />
              </Item>
            </Grid>
            <Grid item xs={12} >
              <Item  className="gapMargin">
                <h2 style={{padding:"10px"}}>🤲 We are gonna make the world better. 🌏</h2>
              </Item>
            </Grid>


            <Grid item xs={12} md={6} >
              <Item style={{ background: 'transparent', boxShadow: 'none'}} className="gapMargin">
                <h2>What is BetterDAO?</h2>
                <p>BetterDAO is a decentralized autonomous organization.a beautiful experiment.

                  All funds will be distributed through voting in the future.
                </p>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item style={{ background: 'transparent', boxShadow: 'none'}} className="gapMargin">
                <h2>How to contribute</h2>
                <iframe
                    width="80%"
                    height="250px"
                    src="https://www.youtube.com/embed/OsRIHlr0_Iw&autoplay=1"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
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
        {/*<iframe  src="https://www.youtube.com/embed/0QBeS8PM1cE?&autoplay=1&mute=1" title="YouTube video player"*/}
        {/*        frameBorder="0"*/}
        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*        allowFullScreen></iframe>*/}
        <video src={bgVideo} autoPlay loop playsInline muted></video>
      </div>

  );
}

export default MainContributePage;
