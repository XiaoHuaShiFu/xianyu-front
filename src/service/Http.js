import axios from 'axios'
import service from './Api'
import { Toast } from 'vant';

let instance = axios.create({
    baseURL: 'https://api.xiaohuashifu.top',
    timeout: 100000
})

// 包裹请求方法的容器
const Http = {};

for (let key in service) {
    let api = service[key];

    // async异步方法，避免回调地狱
    Http[key] = async function(
        params, // get,delete:url; put,post,path:data
        isFormData = false, // 是否是formdata
        config={}, // 配置参数
        urlParam="", // 路径参数
    ) {
        let newParams = {}
        // 是否是formdata
        if (params && isFormData) {
            newParams = new FormData()
            for (let i in params) {
                if (i == "images") {
                    for (let image in params[i]) {
                        newParams.append(i, params[i][image])
                    }          
                } else {
                    newParams.append(i, params[i])
                }
            }
        } else {
            newParams = params
        }

        let newUrl = api.url;
        if (urlParam != null && urlParam != "") {
            newUrl += urlParam 
        }

        // 不同请求判断
        let response = {} // 请求的返回值
        if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
            try {
                response = await instance[api.method](newUrl, newParams, config)
            } catch(err) {
                response = err
            }
        } else if (api.method === 'delete' || api.method === 'get') {
            // 参数放在路径上
            config.params = newParams
            try {
                response = await instance[api.method](newUrl, config)
            } catch(err) {
                response = err
            }
            
        }
        return response
    }

}

// 请求拦截器
instance.interceptors.request.use(config=>{
    // 添加token
    config.headers.Authorization = sessionStorage['token'];
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
    return config
}, (response)=>{
    // 请求错误
    Toast.loading({
        message: '成功...',
        forbidClick: true,
        duration: 1
      });
    return response
})

// 响应拦截器
instance.interceptors.response.use(res=>{
    // 请求成功
    Toast.loading({
        message: '成功...',
        forbidClick: true,
        duration: 1
      });
    return res
}, (response)=>{
    // 请求错误
    Toast.loading({
        message: '失败...',
        forbidClick: true,
        duration: 1
      });
    
    response.status = response.response.status
    response.data = response.response.data
    response.headers = response.response.headers
    return response
})

export default Http