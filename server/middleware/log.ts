/*
 * @Author: leoking
 * @Date: 2022-06-11 20:21:24
 * @LastEditTime: 2022-06-11 20:21:25
 * @LastEditors: your name
 * @Description: 
 */

export default defineEventHandler((event) => {
    console.log('New request: ' + event.req.url)
})