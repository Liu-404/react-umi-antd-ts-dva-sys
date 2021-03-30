import { Form, Input } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const InputItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, inputParams } = params;
    return (
        <Form.Item label={label} name={name}>
            <Input {...inputParams} />
        </Form.Item>
    );
};

export default InputItemView;
