import { Form, Cascader } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const CascaderItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, cascaderParams } = params;
    return (
        <Form.Item label={label} name={name}>
            <Cascader {...cascaderParams} />
        </Form.Item>
    );
};

export default CascaderItemView;
