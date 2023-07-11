import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import WrappedLayout from "./Layout";

ReactDom.render(
    <WrappedLayout />,
    document.querySelector('#root')
);