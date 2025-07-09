import { CmdCode } from "./CmdCode"

export class Net {
    public static Ins: Net = new Net()


    mWebSocket: WebSocket

    mSendDataView: DataView

    mSendTextDecoder: TextDecoder
    mRecTextDecoder: TextDecoder

    mConnCb: Function
    mDisConnCb: Function

    mMsgCb: Map<CmdCode, Function>

    constructor() {
        this.mMsgCb = new Map()
        this.mSendDataView = new DataView(new Uint8Array(2).buffer)

        this.mSendTextDecoder = new TextDecoder()
        this.mRecTextDecoder = new TextDecoder()
    }

    connetion(connCb: Function, disConn: Function) {


        this.mConnCb = connCb
        this.mDisConnCb = disConn

        let onopen = (e: Event) => {
            console.log('onopen')

            this.mConnCb && this.mConnCb()
        }

        let onmessage = (e: MessageEvent) => {
            // console.log('onmessage',e.data)

            const encodeBuf = e.data as ArrayBuffer

            const decodeCmd = new DataView(encodeBuf.slice(0, 2)).getUint16(0, true)

            const decodePkgBuff = encodeBuf.slice(2)
            const dataString = this.mRecTextDecoder.decode(decodePkgBuff);
            this.handmsg(decodeCmd, dataString)
        }

        let onclose = (e: CloseEvent) => {
            console.log('onclose', e.reason)
            this.disconnection()
        }

        let onerror = (e: Event) => {
            console.log('onerror')
            this.disconnection()
        }

        this.mWebSocket = new WebSocket('ws://127.0.0.1:12346')
        this.mWebSocket.binaryType = "arraybuffer"
        this.mWebSocket.onopen = onopen
        this.mWebSocket.onmessage = onmessage
        this.mWebSocket.onclose = onclose
        this.mWebSocket.onerror = onerror
    }

    disconnection() {

        this.mDisConnCb && this.mDisConnCb()

        if (this.mWebSocket) {
            this.mWebSocket.close()
        }
        this.mWebSocket = null

        this.mMsgCb.clear()
    }

    regMsg(cmd: CmdCode, cb: Function) {
        this.mMsgCb.set(cmd, cb);
    }

    send(cmd: number, data: object) {
        this.mSendDataView.setUint16(0, cmd, true)

        const dataString = this.mSendTextDecoder.decode(this.mSendDataView);

        const jsonStr = JSON.stringify(data)

        this.mWebSocket.send(dataString + jsonStr)
        console.log(`[Net Send] cmd=${cmd} ${CmdCode[cmd]} pkg=${jsonStr}`);
    }

    handmsg(cmd: number, str: string) {
        console.log(`[Net Rec] cmd=${cmd} ${CmdCode[cmd]} pkg=${str}`);
        if (this.mMsgCb.has(cmd)) {
            let func = this.mMsgCb.get(cmd);
            let obj = JSON.parse(str)
            func(obj)
        }
    }
}