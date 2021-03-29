import { Row, Col } from 'antd';
import InputItemView from '../InputItemView';
import SelectItemView from '../SelectItemView';
import { SEARCH_TYPE } from '@/utils/constants/compConstant';

// TODO: items type
export interface SearchItemType {
    type: number;
    label: string;
    placeholder?: string;
    options?: any;
    optionText?: string;
    optionValue?: string;
}

export interface FormFieldViewPropsType {
    itemKeys: string[];
    items: { [key: string]: SearchItemType };
    colSpan: number;
    rowSpan: number;
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
                </Col>
            ))}
        </Row>
    );
};

export default FormFieldView;
