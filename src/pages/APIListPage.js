import { Layout } from 'antd';
import CategoryList from '../components/CategoryList';
import Filter from '../components/Filter';
import TableModule from '../components/TableModule';
import PaginationComponent from '../components/Pagination';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiList } from '../reducers/slice';

const { Header, Footer, Sider, Content } = Layout;

function APIListPage () {
    const dispatch = useDispatch();
    // Get data from store
    const apiList = useSelector(state => state.list);
    const apiQuery = useSelector(state => state.queryStr);
    const apiCurrentPage = useSelector(state => state.currentPage);
    const apiCategory = useSelector(state => state.category);
    const apiTotalItems = useSelector(state => state.totalItems);
    const apiStatus = useSelector(state => state.status);

    useEffect(() => {
        if (apiStatus === 'idle') {
            dispatch(fetchApiList(apiCategory, apiQuery, apiCurrentPage));
        }
    }, [apiStatus, dispatch]);

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
                        <PaginationComponent pageSize={3} currentPage={apiCurrentPage} total={apiTotalItems} />
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default APIListPage;
