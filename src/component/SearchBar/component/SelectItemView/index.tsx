import { Form, Select } from 'antd';
import useOptionList from '../../hooks/useOptionList';
import { IFormItemBasicProps } from '../FormFieldView';

const SelectItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, options, optionText, optionValue, selectParams } = params;

    const optionList = useOptionList(options, optionText, optionValue);

    return (
        <Form.Item label={label} name={name}>
            <Select {...selectParams}>
                {options &&
                    optionList.map((option: any) => (
                        <Select.Option key={option.value} value={option.value}>
                            {option.text}
                        </Select.Option>
                    ))}
            </Select>
        </Form.Item>
    );
};

export default SelectItemView;
