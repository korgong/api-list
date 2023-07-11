import React from 'react';
import { List } from 'antd';

const APIList = ({ dataSource }) => (
    <List
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    title={item.name}
                    description={item.description}
                />
            </List.Item>
        )}
    />
);

export default APIList;
