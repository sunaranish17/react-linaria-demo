import { css } from '@linaria/core';
import React, { useEffect, useState } from 'react';
import ImageCard from '../molecules/ImageCard';



const container = css`
    width: 100%;
    margin: 50px auto;
    display: flex;
    justify-content: center;
`;

const imageCards = css`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
`;

const loader = css`
    display: flex;
    justify-content: center;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetchImages();
  }, [term]);

  const fetchImages = () => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data?.hits);
        setLoading(false);
      })
      .catch(err => console.log("err>>", err));
  }

  return (

    <div className={container}>
      {loading ?
        // <h1 className={text}>Loading...</h1>
        <div className={loader} />
        :
        <div className={imageCards}>
          {images?.map((image: any) => (
            <ImageCard key={image?.id} image={image} />
          ))}
        </div>
      }
    </div>
  )
}

export default Home
