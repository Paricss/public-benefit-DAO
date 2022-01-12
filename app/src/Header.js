import * as React from 'react';
import './assets/css/header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
//img icon
import DiscordIcon from '@mui/icons-material/SportsEsports'
import logo from './assets/img/earthLogo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useState} from "react";
//

//web3
import {ethers} from 'ethers'

//

const pages = ['DAO', 'Discord', 'Twitter'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

  //web3
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [defaultAccount, setDefaultAccount] = useState(null);
  // const [userBalance, setUserBalance] = useState(null);
  // const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  //
  // const connectWalletHandler = () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     console.log('MetaMask Here!');
  //
  //     window.ethereum.request({ method: 'eth_requestAccounts'})
  //         .then(result => {
  //           accountChangedHandler(result[0]);
  //           setConnButtonText('Wallet Connected');
  //           getAccountBalance(result[0]);
  //         })
  //         .catch(error => {
  //           setErrorMessage(error.message);
  //
  //         });
  //
  //   } else {
  //     console.log('Need to install MetaMask');
  //     setErrorMessage('Please install MetaMask browser extension to interact');
  //   }
  // }
  //
  // // update account, will cause component re-render
  // const accountChangedHandler = (newAccount) => {
  //   setDefaultAccount(newAccount);
  //   getAccountBalance(newAccount.toString());
  // }
  //
  // const getAccountBalance = (account) => {
  //   window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
  //       .then(balance => {
  //         setUserBalance(ethers.utils.formatEther(balance));
  //       })
  //       .catch(error => {
  //         setErrorMessage(error.message);
  //       });
  // };
  //
  // const chainChangedHandler = () => {
  //   // reload the page to avoid any errors with chain change mid use of application
  //   window.location.reload();
  // }
  //
  //
  // // listen for account changes
  // window.ethereum.on('accountsChanged', accountChangedHandler);
  //
  // window.ethereum.on('chainChanged', chainChangedHandler);
  // //
  //
  //
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  //
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  //
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  //   console.log(213);
  // };
  //
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  //
  // const  connectWallet = () => {
  //
  //   console.log(11);
  // }

  return (
      <AppBar position="static"  >
        <Container maxWidth="lg">

          <Toolbar disableGutters>



            <img src={logo} width="70"/>
            <Link  to="/" style={{ textDecoration: 'none' , color: 'white'}}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
            >

              &nbsp;&nbsp;<strong>Better</strong>&nbsp;DAO
            </Typography>
            </Link>
            {/*<Typography*/}
            {/*    variant="h6"*/}
            {/*    noWrap*/}
            {/*    component="div"*/}
            {/*    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}*/}
            {/*>*/}
            {/*  <h2 >BetterDAO</h2>*/}
            {/*</Typography>*/}

            {/*<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>*/}
            {/*  {pages.map((page) => (*/}
            {/*      <Button*/}
            {/*          key={page}*/}
            {/*          onClick={handleCloseNavMenu}*/}
            {/*          sx={{ my: 2, color: 'white', display: 'block' }}*/}
            {/*      >*/}
            {/*        {page}*/}
            {/*      </Button>*/}
            {/*  ))}*/}
            {/*</Box>*/}

            <Button
                // key={page}
                // onClick={handleCloseNavMenu}
                // component={Link}
                // to={"https://twitter.com/BetterDAO"}
                sx={{ my: 2, color: 'white', display: 'block', md: 'flex' }}
            ><a href="https://twitter.com/BetterDAO" target="_blank" style={{ textDecoration: 'none' , color: 'white'}}><TwitterIcon/></a>
            </Button>
            <Button
                // key={page}
                // onClick={handleCloseNavMenu}
                // component={Link}
                // to={"/"}
                sx={{ my: 2, color: 'white', display: 'block' , md: 'flex'}}
            >
              {/*<DiscordIcon/>*/}
            </Button>

            {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>*/}
            {/*  <Button*/}
            {/*      // key={page}*/}
            {/*      onClick={handleCloseNavMenu}*/}
            {/*      component={Link}*/}
            {/*      to={"/DAO"}*/}
            {/*      sx={{ my: 2, color: 'white', display: 'block' }}*/}
            {/*  >*/}
            {/*    DAO*/}
            {/*  </Button>*/}
            {/*      <Button*/}
            {/*          // key={page}*/}
            {/*          onClick={handleCloseNavMenu}*/}
            {/*          // component={Link}*/}
            {/*          // to={"https://twitter.com/BetterDAO"}*/}
            {/*          sx={{ my: 2, color: 'white', display: 'block', md: 'flex' }}*/}
            {/*      ><a href="https://twitter.com/BetterDAO" target="_blank" style={{ textDecoration: 'none' , color: 'white'}}><TwitterIcon/></a>*/}

            {/*  </Button>*/}
            {/*  <Button*/}
            {/*      // key={page}*/}
            {/*      // onClick={handleCloseNavMenu}*/}
            {/*      // component={Link}*/}
            {/*      // to={"/"}*/}
            {/*      sx={{ my: 2, color: 'white', display: 'block' , md: 'flex'}}*/}
            {/*  >*/}
            {/*    Discord*/}
            {/*  </Button>*/}

            {/*</Box>*/}
            {/*<Button onClick={ connectWalletHandler}*/}
            {/*    style={{*/}
            {/*      borderRadius: 10,*/}
            {/*      backgroundColor: "#21b6ae",*/}
            {/*      // padding: "18px 36px",*/}
            {/*      fontSize: "18px"*/}
            {/*    }}*/}
            {/*    variant="contained">{connButtonText}*/}
            {/*</Button>*/}
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default Header;
