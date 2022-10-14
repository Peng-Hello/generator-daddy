// 导入基地址
import { baseUrl } from "../const"
import axios from "axios"
import {setInterceptors} from "./interceptors" // 拦截器
console.log(baseUrl);

// axios 配置
const config={
    baseURL:baseUrl,
    timeout:1000*60*60, // 超时
    headers: {
        "Content-Type": "multipart/form-data",
        // "X-Auth-Token":"test"
    }
}

const BaseAxios=axios.create(config)
setInterceptors(BaseAxios)
// 导出 axios 实例
export default BaseAxios;
