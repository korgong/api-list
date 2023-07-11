import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import WrappedLayout from './Layout';

ReactDom.render(
    <WrappedLayout />,

    document.querySelector('#root'),
);

// api field is like this below
let api = {
    id: 1,
    name: 'API 1',
    category: 'Payment',
    description: 'Payment related operations',
    createTime: '2023-07-10',
    owner: 'Kor Gong',
};
