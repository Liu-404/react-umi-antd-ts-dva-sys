import { Form, InputNumber } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const inputNumberDefaultStyle = {
    width: '100%',
};

const InputNumberItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, inputNumberParams } = params;

    return (
        <Form.Item label={label} name={name}>
            <InputNumber
                style={inputNumberDefaultStyle}
                {...inputNumberParams}
            />
        </Form.Item>
    );
};

export default InputNumberItemView;
