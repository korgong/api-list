import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

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

CategoryList.propTypes = {
    onSelectCategory: PropTypes.func
};

export default CategoryList;
