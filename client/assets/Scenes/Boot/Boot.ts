import { _decorator, Component, Node, director, EditBox } from 'cc';
import { Net } from '../Net';
import { CmdCode } from '../CmdCode';
import { UserData } from '../UserData';
const { ccclass, property } = _decorator;

@ccclass('Boot')
export class Boot extends Component {

    @property({ type: EditBox })
    editBox: EditBox | null = null;

    start() {
        this.editBox.string = 'a1'
    }

    update(deltaTime: number) {

    }

    onLoginClick() {
        let str = this.editBox.string
        if (str.length <= 0) {
            console.error('输入为空')
            return
        }

        Net.Ins.regMsg(CmdCode.S2CLogin, (res) => {
            console.log(res)
            if (res.ok) {
                UserData.Ins.uid = res.uid
                UserData.Ins.time = res.time
                director.loadScene('Hall')
            }
        })

        Net.Ins.connetion(() => {

            Net.Ins.send(CmdCode.C2SLogin, { openid: str })

        }, () => {
            director.loadScene('Boot')
        })

    }
}


