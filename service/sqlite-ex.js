/*
 * @Author: leoking
 * @Date: 2022-06-10 20:31:57
 * @LastEditTime: 2022-06-11 20:01:41
 * @LastEditors: your name
 * @Description: 
 */

import add from 'mylib/src/utils'
import logger from 'mylib/src/logger';

export default function () {
    logger.w(add(1, 2))
    console.log( "sqlite-ex.js" );
    console.log(add(1,2))
}
