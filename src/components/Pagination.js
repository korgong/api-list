import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

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

PaginationComponent.propTypes = {
    currentPage: PropTypes.number,
    total: PropTypes.number,
    pageSize: PropTypes.number,
    onChange: PropTypes.func
};

export default PaginationComponent;
