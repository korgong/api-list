import { Layout } from 'antd';
import CategoryList from '../components/CategoryList';
import Filter from '../components/Filter';
import TableModule from '../components/TableModule';
import PaginationComponent from '../components/Pagination';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiList, updateCurrentPage } from '../reducers/slice';

const { Header, Footer, Sider, Content } = Layout;

function APIListPage() {
    const dispatch = useDispatch();
    // Get data from store
    const apiList = useSelector((state) => state.list);
    const apiQuery = useSelector((state) => state.queryStr);
    const apiCurrentPage = useSelector((state) => state.currentPage);
    const apiCategory = useSelector((state) => state.category);
    const apiTotalItems = useSelector((state) => state.totalItems);
    const showLoading = useSelector((state) => state.showLoading);

    const changePage = useCallback((page, _pageSize) => {
        dispatch(updateCurrentPage(page));
    }, []);

    useEffect(() => {
        // todo think about the parameter
        // if (showLoading === false) {
        //     console.log(apiCategory, apiQuery, apiCurrentPage);
        // }
        console.log('apiCurrentPage', apiCurrentPage);
        dispatch(fetchApiList(apiCategory, apiQuery, apiCurrentPage));
    }, [dispatch, apiCurrentPage]);

    return (
        <div>
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
        </div>
    );
}

export default APIListPage;
