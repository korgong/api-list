import React from 'react';
import { Pagination } from 'antd';

PaginationComponent.propTypes = {
    currentPage: Number,
    total: Number,
    pageSize: Number,
    onChange: Function
};
const PaginationComponent = ({
    currentPage = 1,
    total,
    pageSize,
    onChange
}) => (
    <Pagination
        currentPage={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
    />
);

export default PaginationComponent;
