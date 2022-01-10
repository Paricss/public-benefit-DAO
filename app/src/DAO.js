import React, {useState, useEffect} from 'react';
import './assets/css/DAO.css';
import projectDiagram from './assets/img/dao.jpg';

//img


//material ui
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//

//Grid

//

function DAO() {


  return (

     // <div className="page" style ={ { backgroundImage: `url(${projectDiagram})`}}>
     //
     // </div>
      <img width="100%" src={projectDiagram}/>
  );
}

export default DAO;