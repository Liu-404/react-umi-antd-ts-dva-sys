import { SEARCH_TYPE } from '@/utils/constants/enum';

export enum DEVICE_COLUMN_RENDER_TYPE {
    DeviceStatusView = 'DeviceStatusView',
    SwitchStatusView = 'SwitchStatusView',
    ActionBarView = 'ActionBarView',
}

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

export const DEVICE_TABLE_COLUMNS = [
    {
        title: '项目名称',
        dataIndex: 'projectName',
        key: 'action',
    },
    {
        title: '安装地址',
        dataIndex: 'addr',
    },
    {
        title: '设备编码',
        dataIndex: 'code',
    },
    {
        title: '设备名称',
        dataIndex: 'name',
    },
    {
        title: '产品名称',
        dataIndex: 'productName',
    },
    {
        title: '所属网关',
        dataIndex: 'gatewayName',
    },
    {
        title: '安装时间',
        dataIndex: 'installAt',
    },
    {
        title: '设备状态',
        dataIndex: 'status',
        render: DEVICE_COLUMN_RENDER_TYPE.DeviceStatusView,
    },
    {
        title: '开关状态',
        dataIndex: 'switchStatus',
        render: DEVICE_COLUMN_RENDER_TYPE.SwitchStatusView,
    },
    {
        title: '操作',
        render: DEVICE_COLUMN_RENDER_TYPE.ActionBarView,
    },
];
