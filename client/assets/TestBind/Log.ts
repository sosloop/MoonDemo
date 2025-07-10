enum LogLevel
{
    Error = 0,
    Warining = 1,
    Debug = 2,
    Log = 3,
}

export class Log
{
    public static LogLevel: LogLevel = LogLevel.Log;

    static get Log() {

        return window.console.log.bind(window.console, '%c【信息】', 'color: white; background-color: #28A745; font-weight: bold; font-size: 14px;');

    }

    static get Debug() {

        return window.console.log.bind(window.console, '%c【调试】', 'color: white; background-color: #007BFF; font-weight: bold; font-size: 14px;');

    }

    static get Warning() {

        return window.console.log.bind(window.console, '%c【警告】', 'color: black; background-color: #FFC107; font-weight: bold; font-size: 14px;');

    }

    static get Error() {

        return window.console.log.bind(window.console, '%c【错误】', 'color: white; background-color: #DC3545; font-weight: bold; font-size: 14px;');

    }
}
