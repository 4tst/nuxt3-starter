/*
 * @Author: leoking
 * @Date: 2022-06-10 20:48:30
 * @LastEditTime: 2022-06-10 20:48:31
 * @LastEditors: your name
 * @Description: 
 */
/*
 * @Author: leoking
 * @Date: 2022-01-14 15:10:18
 * @LastEditTime: 2022-01-27 15:53:14
 * @LastEditors: your name
 * @Description: 简易logger
 *  默认INFO级别
 */

export class Logger {
    id: string;
    level: number;
    prefix: string;
    static DEBUG = 10;
    static INFO = 20;
    static WARN = 30;
    static ERROR = 40;
    static NO = 10000;

    static INSTS: any = {};
    constructor({ id = "default", level = Logger.INFO, prefix = "" } = {}) {
        this.id = id;
        this.level = level;
        this.prefix = prefix;
    }
    /**
     * @description: 
     *  这里会根据id保留一个共享实例
     * @param {*} id
     * @param {*} level
     * @param {*} prefix
     * @return {*}
     */
    static get({ id = "default", level = Logger.INFO, prefix = "" } = {}) {
        if (!this.INSTS[id]) {
            this.INSTS[id] = new Logger({ id: id, level: level });
        }
        return this.INSTS[id];
    }
    static debug(...args: any[]) {
        console.log(...args);
    }
    static info(...args: any[]) {
        console.info(...args);
    }
    static warn(...args: any[]) {
        console.warn(...args);
    }
    static error(...args: any[]) {
        console.error(...args);
    }
    getPrefix() {
        return new Date().toLocaleString() + " " + this.id + " " + (this.prefix || "");
    }
    d(...args: any[]) {
        if (this.level > Logger.DEBUG) {
            return;
        }

        Logger.debug(this.getPrefix(), "[D] -", ...args);
    }
    i(...args: any[]) {
        // console.log(arguments.callee.caller)
        // console.log(stack.clean(new Error().stack))
        if (this.level > Logger.INFO) {
            return;
        }
        Logger.info(this.getPrefix(), "[I] -", ...args);
    }
    w(...args: any[]) {
        if (this.level > Logger.WARN) {
            return;
        }
        Logger.warn(this.getPrefix(), "[W] -", ...args);
    }
    e(...args: any[]) {
        if (this.level > Logger.ERROR) {
            return;
        }
        Logger.error(this.getPrefix(), "[E] -", ...args);
    }
}

function test() {
    let a = Logger.get();
    // console.log(Logger.INSTS)
    let b = Logger.get({ id: "b" });
    // console.log(Logger.INSTS)
    a.level = Logger.INFO;
    a.d("hello", "world");
    b.i("what", "wrong");
}

// 默认是一个logger实例
export default Logger.get();

