import type { FormInstance } from 'antd/es/form';
import type { FC } from 'react';

import { Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CreateManagementForm: FC = () => {
  const formRef = React.useRef<FormInstance>(null);

  const onChangeProductStatus = (value: string) => {
    switch (value) {
      case '1':
        formRef.current?.setFieldsValue({ note: 'Hi, man!' });
        break;
      case '0':
        formRef.current?.setFieldsValue({ note: 'Hi, lady!' });
        break;
      default:
        break;
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item name="category" label="Danh mục" rules={[{ required: true }]}>
        <Select placeholder="Chọn danh mục sản phẩm" onChange={onChangeProductStatus} allowClear>
          <Option value="0">Sofa</Option>
          <Option value="1">Giường</Option>
          <Option value="2">Tủ</Option>
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="trademarket" label="Thương hiệu" rules={[{ required: true }]}>
        <Select placeholder="Chọn thương hiệu sản phẩm" onChange={onChangeProductStatus} allowClear>
          <Option value="0">Luxury 1</Option>
          <Option value="1">Luxury 2</Option>
          <Option value="2">Luxury 3</Option>
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item name="native" label="Xuất xứ" rules={[{ required: true }]}>
        <Select placeholder="Chọn xuất xứ sản phẩm" onChange={onChangeProductStatus} allowClear>
          <Option value="0">Việt Nam</Option>
          <Option value="1">Hàn Quốc</Option>
          <Option value="2">Đài Loan</Option>
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item name="costPrice" label="Giá vốn" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="salePrice" label="Giá bán" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Mô tả">
        <TextArea rows={4} placeholder="Mô tả sản phẩm" maxLength={6} />
      </Form.Item>
      <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
        <Select placeholder="Chọn trạng thái sản phẩm" onChange={onChangeProductStatus} allowClear>
          <Option value="1">Đang kinh doanh</Option>
          <Option value="0">Ngừng kinh doanh</Option>
        </Select>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
    </Form>
  );
};

export default CreateManagementForm;
