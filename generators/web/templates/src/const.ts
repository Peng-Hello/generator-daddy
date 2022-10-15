// Axios 配置
export let BASE_URL = 'http://127.0.0.1:4523/m1/1014290-0-default'
// 需要特殊处理的白名单 例如:这个 Api 的返回值是 Blob
export const resHelperWhitelist:[String]=["/Excel"]
// 环境判定
switch(import.meta.env.MODE){
    // 开发环境
    case "development":
        BASE_URL="http://127.0.0.1:4523/m1/1014290-0-default/" ;
       break;
    // 生产环境
    case "production":
        BASE_URL="http://127.0.0.1:4523/m1/1014290-0-default/";
        break;
}

// 404 页配置
// 重定向定时 (单位:秒)
export const NOT_FOUND_COUNT_DOWN_TIME:number=3;

