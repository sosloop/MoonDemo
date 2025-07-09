import * as cc from "cc";
import { CmdCode } from "../Scenes/CmdCode";
const { ccclass, property } = cc._decorator;


@ccclass('TestSocket')
export class TestSocket extends cc.Component {

    @property({ type: cc.Node })
    btnLayout: cc.Node | null = null;

    @property({ type: cc.Label })
    label: cc.Label | null = null;

    mWebSocket: WebSocket

    mSendDataView: DataView

    mSendTextDecoder: TextDecoder
    mRecTextDecoder: TextDecoder

    start() {


        this.initBtn()

        this.mSendDataView = new DataView(new Uint8Array(2).buffer)

        this.mSendTextDecoder = new TextDecoder()
        this.mRecTextDecoder = new TextDecoder()

        let onopen = (e: Event) => {
            console.log('onopen')

            this.send(CmdCode.C2SLogin, { openid: 'a1' })
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
        }

        let onerror = (e: Event) => {
            console.log('onerror')
        }

        this.mWebSocket = new WebSocket('ws://127.0.0.1:12346')
        this.mWebSocket.binaryType = "arraybuffer"
        this.mWebSocket.onopen = onopen
        this.mWebSocket.onmessage = onmessage
        this.mWebSocket.onclose = onclose
        this.mWebSocket.onerror = onerror
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
    }

    update(deltaTime: number) {

    }

    initBtn() {
        let btnArr = this.btnLayout.children
        let index = 0
        {
            this.setBtnClick(btnArr[index], CmdCode[CmdCode.C2SItemList], () => {
                this.send(CmdCode.C2SItemList, {})
            })
            index++
        }
    }

    setBtnClick(n: cc.Node, txt: string, cb: Function) {
        n.children[0].getComponent(cc.Label).string = txt.replace('C2S', '')
        n.off(cc.Button.EventType.CLICK);
        n.on(cc.Button.EventType.CLICK, () => {
            cb && cb()
        })
    }
}


