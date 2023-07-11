import { Layout } from 'antd';
import React from 'react';
import CategoryList from '../components/CategoryList';
import Filter from '../components/Filter';
import List from '../components/List';
import Pagination from '../components/Pagination';

const { Header, Footer, Sider, Content } = Layout;

const APIListPage = function () {
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
                        <List />
                    </div>
                    <div>
                        <Pagination pageSize={5} total={5} />
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

export default APIListPage;
