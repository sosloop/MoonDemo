import { _decorator, Component, Node } from 'cc';
import { Net } from '../Net';
import { CmdCode } from '../CmdCode';
const { ccclass, property } = _decorator;

@ccclass('BuildComp')
export class BuildComp extends Component {
    start() {

        Net.Ins.regMsg(CmdCode.S2CStartProduction, (res) => {
            console.log(res)
        })
        Net.Ins.regMsg(CmdCode.S2CReceiveProduction, (res) => {
            console.log(res)
        })
    }

    update(deltaTime: number) {
        
    }

    async OnItemClick()
    {
        Net.Ins.send(CmdCode.C2SStartProduction, { configid: 1 })
    }

    async OnItemRecClick()
    {
        Net.Ins.send(CmdCode.C2SReceiveProduction, { configid: 1 })
    }
}


