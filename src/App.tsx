import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const imageComponent = css`
    display: "grid";
    gap: "1rem";
`;

const container = css`
    margin-left: "auto";
    margin-right: "auto";
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
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data?.hits);
        setLoading(false);
      })
      .catch(err => console.log("err>>", err))
  }, [term])

  return (
    // <Container>
    //   <AppHeader>
    //     <Img src={logo} alt="logo" />
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
    <div className={container}>
      {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}
      {
        !loading && images.length === 0 &&
        <h1 className={textTitle}>No Images Found</h1>
      }
      {loading ?
        <h1 className={textTitle}>Loading...</h1>
        :
        <div className={imageComponent}>
          {images?.map((image: any) => (
            // <ImageCard key={image?.id} image={image} />
            <img src={image?.webformatURL} />
          ))}
        </div>}
    </div>
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

const Img = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Paragraph = styled.p``

const Link = styled.a`
  color: #61dafb;
`

export default App;
