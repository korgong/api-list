import React from 'react';
import { Pagination } from 'antd';

const PaginationComponent = ({
    currentPage = 1,
    total,
    pageSize,
    onChange,
}) => (
    <Pagination
        currentPage={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
    />
);

export default PaginationComponent;
