import {ref} from 'vue'
 // 计数器
export let couter=ref(0);
// 点击增 1
export function handleAdd(){
    couter.value++;
}