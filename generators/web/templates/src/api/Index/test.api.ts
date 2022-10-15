import BaseAxios from "../base_axios";
import ResHelper from "../ResHelper";

// 测试 Api
export function test(){
return BaseAxios.get("/test").then(ResHelper);
}