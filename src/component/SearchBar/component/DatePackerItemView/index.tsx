import { Form, DatePicker } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const datePickerDefaultStyle = {
    width: '100%',
};

const DatePackerItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, datePickerParams } = params;

    return (
        <Form.Item label={label} name={name}>
            <DatePicker style={datePickerDefaultStyle} {...datePickerParams} />
        </Form.Item>
    );
};

export default DatePackerItemView;
