import { css } from '@linaria/core';
import React, { useEffect, useState } from 'react';
import ImageCard from '../molecules/ImageCard';
// import "antd/dist/antd.css";
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';



const container = css`
    width: 100%;
    margin: 50px auto;
    display: flex;
    justify-content: center;
`;

const text = css`
   font-size: 10px;
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

const primaryButton = css`
    background-color: greenyellow;
`;

const Home = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [term, setTerm] = useState("");

    const { Meta } = Card;

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
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>

  <Button type="primary" className={primaryButton}>
          Primary
        </Button>
        <Button >Default</Button>
        <Button type="dashed" >
          Dashed
        </Button>
        <br />
        <Button type="link" >
          Link
        </Button>
            {/* {loading ?
                // <h1 className={text}>Loading...</h1>
                <div className={loader} />
                :
                <div className={imageCards}>
                    {images?.map((image: any) => (
                        <ImageCard key={image?.id} image={image} />
                    ))}
                </div>
            } */}
        </div>
    )
}

export default Home
