import React from 'react';
import { List } from 'antd';

const APIList = ({ apis }) => (
    <List
        itemLayout="horizontal"
        dataSource={apis}
        renderItem={item => (
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
