import { Row, Col } from 'antd';
import InputItemView from '../InputItemView';
import SelectItemView from '../SelectItemView';
import CascaderItemView from '../CascaderItemView';
import DatePackerItemView from '../DatePackerItemView';
import DateRangePickerItemView from '../DateRangePickerItemView';
import InputNumberItemView from '../InputNumberItemView';
import TimePickerItemView from '../TimePickerItemView';
import TimeRangePickerItemView from '../TimeRangePickerItemView';
import { SEARCH_TYPE } from '@/utils/constants/compConstant';

export interface SearchItemType {
    type: number;
    label: string;
    options?: any; // select
    optionText?: string; // select
    optionValue?: string; // select
    selectParams?: {};
    inputParams?: {};
    cascaderParams?: {};
    datePickerParams?: {};
    dateRangePickerParams?: {};
    inputNumberParams?: {};
    timePickerParams?: {};
    timeRangePickerParams?: {};
}

export interface FormFieldViewPropsType {
    itemKeys: string[];
    items: { [key: string]: SearchItemType };
    colSpan: number;
    rowSpan: number;
}

export interface IFormItemBasicProps {
    params: SearchItemType;
    name: string;
}

const FormFieldView = (props: FormFieldViewPropsType) => {
    const { itemKeys, items, rowSpan, colSpan } = props;

    return (
        <Row gutter={rowSpan}>
            {itemKeys.map((key) => (
                <Col span={colSpan} key={key}>
                    {items[key].type === SEARCH_TYPE.INPUT && (
                        <InputItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === SEARCH_TYPE.SELECT && (
                        <SelectItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === SEARCH_TYPE.CASCADER && (
                        <CascaderItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === SEARCH_TYPE.DATE_PICKER && (
                        <DatePackerItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === SEARCH_TYPE.DATA_RANGE_PICKER && (
                        <DateRangePickerItemView
                            params={items[key]}
                            name={key}
                        />
                    )}
                    {items[key].type === SEARCH_TYPE.INPUT_NUMBER && (
                        <InputNumberItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === SEARCH_TYPE.TIME_PICKER && (
                        <TimePickerItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === SEARCH_TYPE.TIME_RANGE_PICKER && (
                        <TimeRangePickerItemView
                            params={items[key]}
                            name={key}
                        />
                    )}
                </Col>
            ))}
        </Row>
    );
};

export default FormFieldView;
