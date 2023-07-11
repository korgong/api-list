import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

const FilterForm = ({ onSearch }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onSearch(values);
    };

    return (
        <Form form={form} layout="inline" onFinish={onFinish}>
            <Form.Item name="name">
                <Input placeholder="API Name" />
            </Form.Item>
            <Form.Item name="description">
                <Input placeholder="API Description" />
            </Form.Item>
            <Form.Item name="createTime">
                <DatePicker placeholder="Create Time" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FilterForm;
