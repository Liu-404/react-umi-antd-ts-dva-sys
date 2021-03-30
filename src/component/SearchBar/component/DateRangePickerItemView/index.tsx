import { Form, DatePicker } from 'antd';
import { IFormItemBasicProps } from '../FormFieldView';

const { RangePicker } = DatePicker;

const RangePickerItemView = (props: IFormItemBasicProps) => {
    const { params, name } = props;
    const { label, dateRangePickerParams } = params;

    return (
        <Form.Item label={label} name={name}>
            <RangePicker {...dateRangePickerParams} />
        </Form.Item>
    );
};

export default RangePickerItemView;
