import React from 'react';
import { Card } from 'antd';
import { css } from '@linaria/core';

const card = css`
    width: 300px;
    margin: 0;
`;

interface Props {
    image: any;
}

const ImageCard = ({ image }: Props) => {
    const { Meta } = Card;
    return (
        <Card
        
            // style={{ width: 300 }}
            className={card}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
