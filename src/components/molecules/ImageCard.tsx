import React from 'react';
import { Card, Tag } from 'antd';
import { css } from '@linaria/core';

const card = css`
    width: 300px;
    margin: 0;
    margin-bottom: 20px;
`;

const imageStyle = css`
    width: 100%;
    height: 250px;
`;

const listingStyle = css`
    margin-left: 40px;
`;

const tagDiv = css`
    margin: 4px 6px;
`;

const tagStyle = css`
    display: inline-block;
    border-radius: 9999px;
    padding: 0.25rem 0.75rem;
    color: #FFFFFF;
    margin: 0.25rem;
`;

interface Props {
    image: any;
}

const ImageCard = ({ image }: Props) => {
    const tags = image?.tags?.split(",");
    const { Meta } = Card;

    function get_random_hex_color() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <Card
            // className={card}
            cover={
                <img
                    alt="example"
                    src={image?.webformatURL}
                    className={imageStyle}
                />
            }
        >
            <Meta
                title={`Photo by: ${image?.user}`}
            />
            <ul className={listingStyle}>
                <li>
                    <strong>Views: </strong>
                    {image?.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image?.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image?.likes}
                </li>
            </ul>
            <div className={tagDiv}>
                {
                    tags?.map((tag: any, index: number) => (
                        // <div>
                        <Tag key={index} color={get_random_hex_color()} className={tagStyle}>#{tag} </Tag>
                        // </div>
                    ))
                }
            </div>
        </Card>
    )
}

export default ImageCard
