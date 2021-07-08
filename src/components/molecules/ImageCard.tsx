import React from 'react';
import { Button, Card, Tag } from 'antd';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

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

const card = css `
    & .ant-btn-primary:hover, .ant-btn:focus {
        color: #222222;
        border: 1px solid #000000;
    };
    & .ant-btn-primary:active {
        color: #222222;
        border: 1px solid #000000;
    };
`;

const button = css`
    width: 200px;
`;

const StyledTag = styled(Tag)`
    display: inline-block;
    border-radius: 9999px;
    padding: 0.25rem 0.75rem;
    color: #FFFFFF;
    margin: 0.25rem;
    width: ${(props: any) => props?.size}px;
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

    function handleClick () {
        alert("Button Clicked")
    }

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
                        // <Tag key={index} color={get_random_hex_color()} className={tagStyle}>#{tag} </Tag>
                        <StyledTag color={get_random_hex_color()}>#{tag}</StyledTag>
                    ))
                }
            </div>
            <Button className={button} type="primary" onClick={handleClick}> Button </Button>
        </Card>
    )
}

export default ImageCard
