import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

const categories = ['Rest', 'Odata v2', 'Odata v4'];

CategoryList.propTypes = {
    onSelectCategory: PropTypes.func
};
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
