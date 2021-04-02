import ContentPanel from '@/component/ContentPanel';
import SearchBar from '@/component/SearchBar';
import {
    DEVICE_SEARCH_PARAMS,
    DEVICE_TABLE_COLUMNS,
    DEVICE_COLUMN_RENDER_TYPE,
} from './constant';
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'umi';

export interface RootState {
    device: {
        deviceList: any;
    };
}

const contentPanelStyle = {
    marginBottom: '20px',
};

const formParams = {
    // initialValues: {
    //     code: '222',
    // },
};

const columns = DEVICE_TABLE_COLUMNS.map((column) => {
    if (column.render) {
        switch (column.render) {
            case DEVICE_COLUMN_RENDER_TYPE.DeviceStatusView:
                return { ...column, render: DeviceStatusView };
            case DEVICE_COLUMN_RENDER_TYPE.SwitchStatusView:
                return { ...column, render: SwitchStatusView };
            case DEVICE_COLUMN_RENDER_TYPE.ActionBarView:
                return { ...column, render: ActionBarView };
            default:
                return column;
        }
    } else {
        return column;
    }
});

const DeviceStatusView = (text: number) => {
    let content = '';
    switch (text) {
        case 2:
            content = '在线';
            break;
        case 3:
            content = '离线';
            break;
        default:
            content = '未知';
            break;
    }
    return <p>{content}</p>;
};

const SwitchStatusView = (text: number) => {
    let content = '';
    switch (text) {
        case 1:
            content = '合闸';
            break;
        case 2:
            content = '分闸';
            break;
        case 3:
            content = '闭锁';
            break;
        case 4:
            content = '解锁';
            break;
        default:
            content = '未知';
            break;
    }
    return <p>{content}</p>;
};

const ActionBarView = (text: any, record: any) => {
    console.log(text, record);

    return <p>111111</p>;
};

const Device = () => {
    const dispatch = useDispatch();
    const dataSource = useSelector(
        (state: RootState) => state.device.deviceList,
    );

    useEffect(() => {
        dispatch({
            type: 'device/fetchDeviceList',
            payload: { pageNo: 0, pageSize: 10 },
        });
    }, [dispatch]);

    console.log(dataSource);

    const handleSearch = (val: any) => {
        // TODO: 获取 搜索栏表单内容
        console.log(val);
    };

    return (
        <div>
            <ContentPanel contentPanelStyle={contentPanelStyle}>
                <SearchBar
                    searchItems={DEVICE_SEARCH_PARAMS}
                    isOpenExpand
                    onSearch={handleSearch}
                    formParams={formParams}
                />
            </ContentPanel>
            <ContentPanel>
                <Table dataSource={dataSource} columns={columns} rowKey="id" />
            </ContentPanel>
        </div>
    );
};

export default Device;
