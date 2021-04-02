import request from '@/utils/request';

export const fetchDeviceListApi = async (params: any) => {
    console.log('service params', params);

    const res = await request('device/device/page', {
        method: 'post',
        data: params,
    });
    return res;
};
