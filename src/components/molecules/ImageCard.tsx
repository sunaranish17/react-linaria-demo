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
    background-color: gray;
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
    return (
        <Card
            className={card}
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
                        // <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        //     #{tag}
                        // </span>
                        <Tag key={index} className={tagStyle}>#{tag} </Tag>
                    ))
                }
            </div>
        </Card>
    )
}

export default ImageCard
