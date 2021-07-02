import { css } from '@linaria/core';
import React, { useEffect, useState} from 'react';
import ImageCard from '../molecules/ImageCard';



const container = css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const text = css`
   font-size: 10px;
`;

const imageCards = css`
    display: flex;
    justify-content: space-around;
`;

const Home = () => {
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
        <div className={container}>
            <h1 className={text}>This is Anish</h1>
            <div className={imageCards}>
            {images?.map((image: any) => (
                <ImageCard key={image?.id} image={image} />
            ))}
            </div>
        </div>
    )
}

export default Home
