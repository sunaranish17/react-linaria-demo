import React from "react";
import './App.css';
// import { styled } from "@linaria/react";
// import { css } from "@linaria/core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

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


// const Container = styled.div`
//   text-align: center;
// `

// const AppHeader = styled.header`
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// `

// const Paragraph = styled.p``

// const Link = styled.a`
//   color: #61dafb;
// `

export default App;
