import { Effect, Reducer, Subscription } from 'umi';

export interface RouteType {
    component?: any;
    exact?: boolean;
    name?: string;
    path?: string;
    routes?: RouteType[];
    [attr: string]: any;
}

export interface CommonModelState {
    routes: RouteType;
}

export interface CommonModelType {
    namespace: string;
    state: CommonModelState;
    effects: {
        query: Effect;
    };
    reducers: {
        saveRoutes: Reducer<CommonModelState>;
        // 启用 immer 之后
        // save: ImmerReducer<IndexModelState>;
    };
    subscriptions: { setup: Subscription };
}

const IndexModel: CommonModelType = {
    namespace: 'common',

    state: {
        routes: {},
    },

    effects: {
        *query({ payload }, { call, put }) {},
    },
    reducers: {
        saveRoutes(state, action) {
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
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'query',
                    });
                }
            });
        },
    },
};

export default IndexModel;
