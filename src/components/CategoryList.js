import React from 'react';
import { List } from 'antd';

const categories = ['Rest', 'Odata v2', 'Odata v4'];

const CategoryList = ({ onSelectCategory }) => (
    <List
        bordered
        dataSource={categories}
        renderItem={(item) => (
            <List.Item onClick={() => onSelectCategory(item)}>{item}</List.Item>
        )}
    />
);

export default CategoryList;
