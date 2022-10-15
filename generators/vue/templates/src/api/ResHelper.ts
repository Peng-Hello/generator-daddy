import {AxiosResponse} from 'axios'
import {resHelperWhitelist} from './../const'
export default (res:AxiosResponse) =>{
    // 特殊处理返回值为 Blob 的 Api eg:config.url:/test
    if(res.config.url&&resHelperWhitelist.includes(res.config.url)){
        return res.data;
    }
    // 按照你自己后端的字段来
    return res.data;
}
