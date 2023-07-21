import { Layout, Spin } from 'antd';
import CategoryList from '../components/CategoryList';
import Filter from '../components/Filter';
import TableModule from '../components/TableModule';
import PaginationComponent from '../components/Pagination';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiList, updateCurrentPage } from '../reducers/apiListPageSlice';

const { Header, Footer, Sider, Content } = Layout;

function APIListPage() {
    const dispatch = useDispatch();
    // Get data from store
    const loading = useSelector((state) => state.loading);
    const apiListPageData = useSelector((state) => state.apiListPageData);
    const apiList = apiListPageData.list;
    const apiQuery = apiListPageData.queryStr;
    const apiCurrentPage = apiListPageData.currentPage;
    const apiCategory = apiListPageData.category;
    const apiTotalItems = apiListPageData.totalItems;
    const showLoading = apiListPageData.showLoading;

    const changePage = useCallback((page, _pageSize) => {
        dispatch(updateCurrentPage(page));
    }, []);

    useEffect(() => {
        dispatch(fetchApiList({ apiCategory, apiQuery, apiCurrentPage }));
    }, [dispatch, apiCurrentPage]);

    return (
        <div>
            <Spin spinning={loading}>
                <Layout>
                    <Sider theme="light">
                        <CategoryList />
                    </Sider>
                    <Content>
                        <div>
                            <Filter />
                        </div>
                        <div>
                            <TableModule dataSource={apiList} />
                        </div>
                        <div>
                            <PaginationComponent
                                onChange={changePage}
                                pageSize={3}
                                currentPage={apiCurrentPage}
                                total={apiTotalItems}
                            />
                        </div>
                    </Content>
                </Layout>
            </Spin>
        </div>
    );
}

export default APIListPage;
