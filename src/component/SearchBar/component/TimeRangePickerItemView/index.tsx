import { Form, TimePicker } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const { RangePicker } = TimePicker;

const TimeRangePickerItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, timeRangePickerParams } = params;

    return (
        <Form.Item label={label} name={name}>
            <RangePicker {...timeRangePickerParams} />
        </Form.Item>
    );
};

export default TimeRangePickerItemView;
