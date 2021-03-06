import { extend } from 'umi-request';
import { notification } from 'antd';
import { history } from 'umi';

type CodeMsg = {
    [key: number]: string;
};

const codeMessage: CodeMsg = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/* 全局 错误处理 */
const errorHandler = (error: { response: Response }): Response => {
    const { response } = error;

    if (response && response.status) {
        const { status, url, statusText } = response;
        const errorText = statusText || codeMessage[status];

        /* TODO: 可以针对状态码进行处理 */
        /*
            if (status === 401) {
                notification.error({
                    message: `登录已过期，请重新登录`,
                });
                history.push('/');
                return response;
            } 
        */

        notification.error({
            message: `请求错误 ${status}:${url}`,
            description: errorText,
        });
    } else if (!response) {
        notification.error({
            message: '网络发生异常',
            description: '网络发生异常，无法连接服务器',
        });
    }
    return response;
};

/* 实例化 request */
const request = extend({
    prefix: 'https://hy.schf.tech:8888/api/',
    timeout: 15000,
    errorHandler,
    credentials: 'include', // 是否携带cookie  include为携带
});

/* 请求拦截器 */
request.interceptors.request.use((url, options) => {
    const token = localStorage.getItem('token');
    if (token) {
        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
            Authorization: token,
        };
        return { url, options: { ...options, headers } };
    }
    return { url, options };
});

/* 响应拦截器 */
request.interceptors.response.use(async (response) => {
    const { status } = response;
    if (status === 200) {
        return response;
    } else {
        notification.error({
            description: '网络发生异常无法连接服务器',
            message: '请求错误',
        });
        return response;
    }

    // const res = await response.clone().json();
    // if (res.code === 1000) {
    //     return response;
    // } else {
    //     notification.error({
    //         description: res.msg || '网络发生异常无法连接服务器',
    //         message: '请求错误',
    //     });
    //     return response;
    // }
});

export default request;
