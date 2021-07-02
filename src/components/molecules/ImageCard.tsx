import React from 'react';
import { Card } from 'antd';
import { css } from '@linaria/core';

const card = css`
    width: 300px;
    margin: 0;
`;

const imageStyle = css `
    width: 100%;
`;

interface Props {
    image: any;
}

const ImageCard = ({ image }: Props) => {
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
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}

export default ImageCard
