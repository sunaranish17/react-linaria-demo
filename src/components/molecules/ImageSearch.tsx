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
        e.preventDefault();
        searchText(text);
    };

    return (
        <div className={searchField}>
            {/* <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>
            </form> */}
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                // onSearch={onSearch}
                // className={inputField}
            />
        </div>
    )
}

export default ImageSearch;
