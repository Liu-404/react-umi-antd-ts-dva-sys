import {
    SEARCH_TYPE,
    SEARCH_OPTION_TYPE,
} from '@/utils/constants/compConstant';

export const DEVICE_SEARCH_PARAMS = {
    projectName: {
        type: SEARCH_TYPE.INPUT,
        label: '项目名称',
        placeholder: '请输入项目名称',
    },
    code: {
        type: SEARCH_TYPE.INPUT,
        label: '设备编码',
        placeholder: '请输入设备编码',
    },
    name: {
        type: SEARCH_TYPE.INPUT,
        label: '设备名称',
        placeholder: '请输入设备名称',
    },
    productName: {
        type: SEARCH_TYPE.INPUT,
        label: '产品名称',
        placeholder: '请输入产品名称',
    },
    addr: {
        type: SEARCH_TYPE.INPUT,
        label: '安装地址',
        placeholder: '请输入安装地址',
    },
    gatewayName: {
        type: SEARCH_TYPE.INPUT,
        label: '所属网关',
        placeholder: '请输入所属网关',
    },
    test: {
        type: SEARCH_TYPE.SELECT,
        label: '测试',
        placeholder: '请选择',
        options: [
            { value: 1, text: 'A' },
            { value: 2, text: 'B' },
        ],
        // options: {
        //     A: 'A',
        //     B: 'B',
        // },
        // optionType: SEARCH_OPTION_TYPE.OBJECT,
    },
};
