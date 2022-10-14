import {AxiosResponse} from 'axios'
import {resHelperWhitelist} from './../const'
export default (res:AxiosResponse) =>{
    if(res.config.url&&resHelperWhitelist.includes(res.config.url)){
        return res.data;
    }
    return res.data.data;
}
