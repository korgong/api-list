import React from 'react';
import { List } from 'antd';

const categories = ['Payment', 'User', 'Order']; // Assuming these categories

const CategoryList = ({ onSelectCategory }) => (
    <List
        bordered
        dataSource={categories}
        renderItem={item => (
            <List.Item onClick={() => onSelectCategory(item)}>
                {item}
            </List.Item>
        )}
    />
);

export default CategoryList;
