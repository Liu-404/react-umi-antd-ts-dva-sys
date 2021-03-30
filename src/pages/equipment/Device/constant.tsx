import { SEARCH_TYPE } from '@/utils/constants/compConstant';

export const DEVICE_SEARCH_PARAMS = {
    projectName: {
        type: SEARCH_TYPE.INPUT,
        label: '项目名称',
        inputParams: { placeholder: '请输入项目名称', allowClear: true },
    },
    code: {
        type: SEARCH_TYPE.INPUT,
        label: '设备编码',
        inputParams: { placeholder: '请输入设备编码', allowClear: true },
    },
    name: {
        type: SEARCH_TYPE.INPUT,
        label: '设备名称',
        inputParams: { placeholder: '请输入设备名称', allowClear: true },
    },
    productName: {
        type: SEARCH_TYPE.INPUT,
        label: '产品名称',
        inputParams: { placeholder: '请输入产品名称', allowClear: true },
    },
    addr: {
        type: SEARCH_TYPE.INPUT,
        label: '安装地址',
        inputParams: { placeholder: '请输入安装地址', allowClear: true },
    },
    gatewayName: {
        type: SEARCH_TYPE.INPUT,
        label: '所属网关',
        inputParams: { placeholder: '请输入所属网关', allowClear: true },
    },
};
