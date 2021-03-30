import { useState, useRef, CSSProperties, useEffect } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import FormFieldView from './component/FormFieldView';
import useObserver from '@/utils/hooks/useObserver';
import useColSpan from './hooks/useColSpan';
import useVisibleItems from './hooks/useVisibleItems';

type SizeType = Parameters<typeof Form>[0]['size'];

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
    size?: SizeType; // form size
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
        size,
        onSearch,
    } = params;

    const [expand, setExpand] = useState(false);
    const [searchBoxWidth, setSearchBoxWidth] = useState(0);
    const [isCancelObserve, setIsCancelObserve] = useState(false);

    const [form] = Form.useForm();
    const searchBoxRef = useRef<HTMLDivElement>(null);

    useObserver({
        element: searchBoxRef,
        callback: (element) => {
            let target = element[0].target;
            setSearchBoxWidth(target.offsetWidth);
        },
        cancel: isCancelObserve,
    });

    useEffect(() => {
        setIsCancelObserve(false);
        return () => {
            setIsCancelObserve(true);
        };
    }, []);

    const col = useColSpan(colSpan, searchBoxWidth);
    const itemKeys = isOpenExpand
        ? useVisibleItems(expand, col, searchItemKeys, initRowNum)
        : searchItemKeys;

    const isShowExpandBtn = !(
        !expand && itemKeys.length === searchItemKeys.length
    );

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
                size={size as SizeType}
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
