import { Form, TimePicker } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const timePickerDefaultStyle = {
    width: '100%',
};

const TimePickerItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, timePickerParams } = params;

    return (
        <Form.Item label={label} name={name}>
            <TimePicker style={timePickerDefaultStyle} {...timePickerParams} />
        </Form.Item>
    );
};

export default TimePickerItemView;
