import axios from 'axios';

/**
 * @param host
 * @param uri
 * @param params 已GET和HEAD请求
 * @param data 已POST和PUT请求
 * @param method
 * @param headers.access_token
 * @param options.withoutCheckSign 是否不需要阿里验签， 默认 false
 * @param options.timeout 超时时间， 默认 10 * 1000
 * @param options.retry 请求失败自动重试次数， 默认 3
 * @param options.retryDelay 重试间隔， 默认 2000
 * */
export function request({host, uri, params = {}, data = {}, headers = {}, method = 'GET', options = {}}) {
    const url = host + uri;
    if (url.indexOf('http') !== 0) {
        throw new Error(`非法请求: ${url}`);
    }
    // GET方法参数处理
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            if (value === undefined || value === null || value === '') {
                delete params[key];
            }
        }
    }
    const defaultOptions = {
        withoutCheckSign: false,
        timeout: 10 * 1000,
        retry: 3,
        retryDelay: 2000,
    };
    const defaultHeaders = {

    }
    const config = {
        ...defaultOptions,
        ...options,
        url: url,
        headers:{...defaultHeaders, ...headers},
        method: method,
        params:params,
        data: JSON.stringify(data),
        requestTime: Date.now(),
    };
    return axios.request(config);
}
