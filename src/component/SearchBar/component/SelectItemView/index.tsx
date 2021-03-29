import { Form, Select } from 'antd';
import { SearchItemType } from '../FormFieldView';
import useOptionList from '../../hooks/useOptionList';

export interface SelectItemViewPropsType {
    params: SearchItemType;
    name: string;
}

const SelectItemView = (props: SelectItemViewPropsType) => {
    const { params, name } = props;
    const { label, placeholder, options, optionType } = params;

    /* TODO: 处理 数组options */
    const optionList = useOptionList(optionType, options);

    return (
        <Form.Item label={label} name={name}>
            <Select placeholder={placeholder}>
                {optionList.map((option: any) => (
                    <Select.Option key={option.value} value={option.value}>
                        {option.text}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default SelectItemView;
