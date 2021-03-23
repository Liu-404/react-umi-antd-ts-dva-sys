import { Form, Input } from 'antd';
import { SearchItemType } from '../FormFieldView';

export interface InputItemViewPropsType {
    params: SearchItemType;
    name: string;
}

const InputItemView = (props: InputItemViewPropsType) => {
    const { params, name } = props;
    const { label, placeholder } = params;
    return (
        <Form.Item label={label} name={name}>
            <Input placeholder={placeholder} />
        </Form.Item>
    );
};

export default InputItemView;
