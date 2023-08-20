import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import APP from './APP';

ReactDom.render(
    <APP />,
    document.querySelector('#root')
);
