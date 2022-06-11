/*
 * @Author: leoking
 * @Date: 2022-06-11 20:15:04
 * @LastEditTime: 2022-06-11 20:15:06
 * @LastEditors: your name
 * @Description: 
 */
export default defineEventHandler((event) => {
    console.log(event);
    return {
        api: 'works'
    }
})