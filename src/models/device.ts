import { Effect, Reducer, Subscription } from 'umi';
import { fetchDeviceListApi } from '@/services/device';

export interface IDeviceModelState {
    deviceList: any;
}

export interface IDeviceModelType {
    namespace: string;
    state: IDeviceModelState;
    effects: {
        fetchDeviceList: Effect;
    };
    reducers: {
        saveDeviceList: Reducer<IDeviceModelState>;
        // 启用 immer 之后
        // save: ImmerReducer<IndexModelState>;
    };
    // subscriptions: { setup: Subscription };
}

const DeviceModel: IDeviceModelType = {
    namespace: 'device',

    state: {
        deviceList: [],
    },

    effects: {
        *fetchDeviceList({ payload }, { call, put }) {
            const res = yield call(fetchDeviceListApi, payload);
            yield put({
                type: 'saveDeviceList',
                payload: { deviceList: res.data.content },
            });
        },
    },
    reducers: {
        saveDeviceList(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        // 启用 immer 之后
        // save(state, action) {
        //   state.name = action.payload;
        // },
    },
};

export default DeviceModel;
