'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.request = request;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function request(_ref) {
    var host = _ref.host,
        uri = _ref.uri,
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        _ref$headers = _ref.headers,
        headers = _ref$headers === undefined ? {} : _ref$headers,
        _ref$method = _ref.method,
        method = _ref$method === undefined ? 'GET' : _ref$method,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? {} : _ref$options;

    var url = host + uri;
    if (url.indexOf('http') !== 0) {
        throw new Error('\u975E\u6CD5\u8BF7\u6C42: ' + url);
    }
    // GET方法参数处理
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var value = params[key];
            if (value === undefined || value === null || value === '') {
                delete params[key];
            }
        }
    }
    var defaultOptions = {
        withoutCheckSign: false,
        timeout: 10 * 1000,
        retry: 3,
        retryDelay: 2000
    };
    var defaultHeaders = {};
    var config = (0, _extends3.default)({}, defaultOptions, options, {
        url: url,
        headers: (0, _extends3.default)({}, defaultHeaders, headers),
        method: method,
        params: params,
        data: (0, _stringify2.default)(data),
        requestTime: Date.now()
    });
    return _axios2.default.request(config);
}