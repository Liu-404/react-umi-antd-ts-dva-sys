import { Row, Col } from 'antd';
import InputItemView from '../InputItemView';
import SelectItemView from '../SelectItemView';

// TODO: options type
export interface SearchOptionsItemType {
    [key: string]: string | number;
}

// TODO: items type
export interface SearchItemType {
    type: string;
    label: string;
    placeholder?: string;
    options?: SearchOptionsItemType[];
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
                    {items[key].type === 'input' && (
                        <InputItemView params={items[key]} name={key} />
                    )}
                    {items[key].type === 'select' && (
                        <SelectItemView params={items[key]} name={key} />
                    )}
                </Col>
            ))}
        </Row>
    );
};

export default FormFieldView;
