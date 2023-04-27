import type { FormInstance } from 'antd/es/form';
import type { FC } from 'react';

import { Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CreateCategoryForm: FC = () => {
  const formRef = React.useRef<FormInstance>(null);

  const onChangeCategoryStatus = (value: string) => {
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
      <Form.Item name="name" label="Tên danh mục" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
        <Select placeholder="Chọn trạng thái danh mục" onChange={onChangeCategoryStatus} allowClear>
          <Option value="1">Hoạt động</Option>
          <Option value="0">Không hoạt động</Option>
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

export default CreateCategoryForm;
