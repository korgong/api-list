import { Space, Table, Tag } from 'antd';
import React from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'createTime',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: 'owner',
        dataIndex: 'owner',
        key: 'owner',
    },
];
const TableModule = ({ dataSource, pagination = false }) => {
    return (
        <Table columns={columns} dataSource={dataSource} pagination={false} />
    );
};

export default TableModule;
