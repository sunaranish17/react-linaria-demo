import React, { useState } from 'react';
import { Input } from 'antd';
import { css } from '@linaria/core';

interface Props {
    searchText?: any;
}

const searchField = css`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const inputField = css`
 & .ant-input-group-wrapper {
    width: 300px;
 }
   width: 300px;
`;

const ImageSearch = ({ searchText }: Props) => {
    const { Search } = Input;
    const [text, setText] = useState("");

    const onSubmit = (e: any) => {
        // e.preventDefault();
        searchText(text);
    };

    return (
        <div className={searchField}>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={onSubmit}
                // className={inputField}
                style={{ width: 300 }}
                onChange={e => setText(e.target.value)} 
            />
        </div>
    )
}

export default ImageSearch;
