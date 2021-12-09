import React from "react";
import './assets/css/background.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainContributePage from "./MainContributePage.js";
import ICO from "./ICO.js";
import RockPaperScissors from "./RockPaperScissors.js";
import Vote from "./Vote.js";
import TokenTest from "./TokenTest";
import Header from './Header';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from "@drizzle/react-plugin";

import drizzleOptions from "./drizzleOptions";
import LoadingContainer from './LoadingContainer.js';
import ICOInfo from './ICOInfo.js';
import ContributePage from './ContributePage.js';
import Admin from './Admin.js';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  return (
      <div >
        <Header />
          <Routes>
            <Route path="/ICO" element = {<ICO /> }/>
            <Route path="/mainContributePage" element = {<MainContributePage /> }/>
            <Route path="/contributePage" element={<ContributePage /> }/>
            <Route path="/rockPaperScissors" element={<RockPaperScissors /> }/>
            <Route path="/vote" element={<Vote /> }/>
            <Route path="/TokenTest" element={<TokenTest /> }/>
          </Routes>

      </div>
  );
}

export default App;
