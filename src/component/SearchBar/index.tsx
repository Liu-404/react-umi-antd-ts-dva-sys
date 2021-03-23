import { useState, useRef, CSSProperties, useEffect } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import FormFieldView from './component/FormFieldView';
import useObserver from '@/utils/hooks/useObserver';

export interface SearchBarPropsType {
    searchBtnText?: string; // submit button text
    resetBtnText?: string; // clear button text
    searchItems: {}; // search form item
    isOpenExpand?: boolean; // is open expand function ?
    initRowNum?: number; // if expand, row number
    colSpan?: number; //  Col component span props
    rowSpan?: number; // Row component span props
    buttonBoxStyle?: any; // button box style
    submitBtnStyle?: CSSProperties; // submit btn style
    clearBtnStyle?: CSSProperties; // clear btn style
    expandBtnStyle?: CSSProperties; // expand btn style
    onSearch: (val: {}) => void; // return form value
    /* -----antd form API------ */
    colon?: boolean;
    preserve?: boolean;
}

const defaultSearchBarProps = {
    searchBtnText: '查询',
    resetBtnText: '重置',
    isOpenExpand: false,
    initRowNum: 1,
    rowSpan: 24,
    buttonBoxStyle: {
        textAlign: 'right',
    },
    submitBtnStyle: {
        marginRight: '12px',
    },
    clearBtnStyle: {},
    expandBtnStyle: { marginLeft: '12px' },
    colon: true,
    preserve: true,
};

const SearchBar = (props: SearchBarPropsType) => {
    const params = { ...defaultSearchBarProps, ...props }; // props and default props
    const searchItemKeys = Object.keys(params.searchItems); // searchItems prop's name array

    const {
        searchBtnText,
        resetBtnText,
        searchItems,
        isOpenExpand,
        initRowNum,
        colSpan,
        rowSpan,
        buttonBoxStyle,
        submitBtnStyle,
        clearBtnStyle,
        expandBtnStyle,
        colon,
        preserve,
        onSearch,
    } = params;

    const [expand, setExpand] = useState(false);
    const [searchBoxWidth, setSearchBoxWidth] = useState(0);
    const [col, setCol] = useState(colSpan ? colSpan : 0);
    const [itemKeys, setItemKeys] = useState(searchItemKeys);
    const [isShowExpandBtn, setIsShowExpandBtn] = useState(true);

    const [form] = Form.useForm();
    const searchBoxRef = useRef<HTMLDivElement>(null);

    useObserver({
        element: searchBoxRef,
        callback: (element) => {
            let target = element[0].target;
            setSearchBoxWidth(target.offsetWidth);
        },
    });

    useEffect(() => {
        getColSpanVal();
    }, [colSpan, searchBoxWidth]);

    useEffect(() => {
        getVisibleItems();
    }, [col, expand, isOpenExpand, searchItems, initRowNum]);

    useEffect(() => {
        if (!expand && itemKeys.length === searchItemKeys.length) {
            setIsShowExpandBtn(false);
        } else {
            setIsShowExpandBtn(true);
        }
    }, [itemKeys, expand]);

    const getColSpanVal = () => {
        if (colSpan && colSpan > 0) {
            setCol(colSpan);
        } else {
            if (searchBoxWidth <= 600 && searchBoxWidth > 400) {
                setCol(12);
            } else if (searchBoxWidth <= 400) {
                setCol(24);
            } else {
                setCol(8);
            }
        }
    };

    const getVisibleItems = () => {
        if (isOpenExpand) {
            if (expand) {
                setItemKeys(searchItemKeys);
            } else {
                if (col > 12) {
                    const res = searchItemKeys.slice(0, 1 * initRowNum);
                    setItemKeys(res);
                } else if (col > 8 && col <= 12) {
                    const res = searchItemKeys.slice(0, 2 * initRowNum);
                    setItemKeys(res);
                } else if (col > 6 && col <= 8) {
                    const res = searchItemKeys.slice(0, 3 * initRowNum);
                    setItemKeys(res);
                } else if (col > 4 && col <= 6) {
                    const res = searchItemKeys.slice(0, 4 * initRowNum);
                    setItemKeys(res);
                } else if (col === 4) {
                    const res = searchItemKeys.slice(0, 6 * initRowNum);
                    setItemKeys(res);
                } else if (col === 3) {
                    const res = searchItemKeys.slice(0, 8 * initRowNum);
                    setItemKeys(res);
                } else if (col === 2) {
                    const res = searchItemKeys.slice(0, 12 * initRowNum);
                    setItemKeys(res);
                } else {
                    // col === 1
                    const res = searchItemKeys.slice(0, 24 * initRowNum);
                    setItemKeys(res);
                }
            }
        }
    };

    const handleClear = () => {
        form.resetFields(searchItemKeys);
    };

    const handleSearch = (val: {}) => {
        const resetKeys = searchItemKeys.filter((key) => {
            return itemKeys.indexOf(key) === -1;
        });
        form.resetFields(resetKeys);
        onSearch(val);
    };

    return (
        <div ref={searchBoxRef}>
            <Form
                form={form}
                onFinish={handleSearch}
                colon={colon}
                preserve={preserve}
            >
                <FormFieldView
                    itemKeys={itemKeys}
                    items={searchItems}
                    colSpan={col}
                    rowSpan={rowSpan}
                />
                <Row>
                    <Col span={24} style={buttonBoxStyle}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={submitBtnStyle}
                        >
                            {searchBtnText}
                        </Button>
                        <Button style={clearBtnStyle} onClick={handleClear}>
                            {resetBtnText}
                        </Button>
                        {isOpenExpand && isShowExpandBtn && (
                            <a
                                style={expandBtnStyle}
                                onClick={() => {
                                    setExpand(!expand);
                                }}
                            >
                                {expand ? <UpOutlined /> : <DownOutlined />}
                                {expand ? '收起' : '展开'}
                            </a>
                        )}
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SearchBar;
