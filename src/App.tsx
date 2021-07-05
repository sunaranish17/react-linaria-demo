import React, { useEffect, useState } from 'react';
import './App.css';
import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import "antd/dist/antd.css";

const container = css`
    margin-left: "auto";
    margin-right: "auto";
`;

const button = css`
   background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const textTitle = css`
  font-size: "3.75rem";
      line-height: "1px";
      text-align: "center";
      margin-right: "auto";
      margin-left: "auto";
      margin-top: 32;
`;

function App() {

  return (
    // <Container>
    //   <AppHeader>
    //     <Paragraph>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </Paragraph>
    //     <Link
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </Link>
    //   </AppHeader>
    // </Container>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}


const Container = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Paragraph = styled.p``

const Link = styled.a`
  color: #61dafb;
`

export default App;
