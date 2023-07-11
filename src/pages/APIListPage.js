import { Layout } from 'antd';
import CategoryList from '../components/CategoryList';
import Filter from '../components/Filter';
import TableModule from '../components/TableModule';
import Pagination from '../components/Pagination';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiList } from '../reducers/slice';

const { Header, Footer, Sider, Content } = Layout;

function APIListPage () {
    const dispatch = useDispatch();
    // Get data from store
    const apiList = useSelector(state => state.list);
    const apiStatus = useSelector(state => state.status);
    const apiError = useSelector(state => state.error);

    useEffect(() => {
        if (apiStatus === 'idle') {
            dispatch(fetchApiList());
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
                        <Pagination pageSize={5} total={5} />
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default APIListPage;
