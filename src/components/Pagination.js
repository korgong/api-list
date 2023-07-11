import React from 'react';
import { Pagination } from 'antd';

const PaginationComponent = ({ total, pageSize, onChange }) => (
    <Pagination
        total={total}
        pageSize={pageSize}
        onChange={onChange}
    />
);

export default PaginationComponent;
