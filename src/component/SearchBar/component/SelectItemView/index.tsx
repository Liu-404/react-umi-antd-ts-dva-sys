import { Form, Select } from 'antd';
import { SearchItemType } from '../FormFieldView';

export interface SelectItemViewPropsType {
    params: SearchItemType;
    name: string;
}

const SelectItemView = (props: SelectItemViewPropsType) => {
    const { params, name } = props;
    const { label, placeholder, options } = params;

    return (
        <Form.Item label={label} name={name}>
            <Select placeholder={placeholder}>
                {options?.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                        {option.text}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default SelectItemView;
