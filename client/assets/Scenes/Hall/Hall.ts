import { _decorator, Component, Node, Label, Button } from 'cc';
import { UserData } from '../UserData';
const { ccclass, property } = _decorator;

@ccclass('Hall')
export class Hall extends Component {


    @property({ type: Label })
    uidLabel: Label | null = null;

    @property({ type: Node })
    btnNode: Node | null = null;

    @property({ type: Node })
    layerNode: Node | null = null;

    start() {

        this.uidLabel.string = 'uid=' + UserData.Ins.uid.toString()

        let that = this;
        this.layerNode.children.forEach(l => {
            let mask = l.getChildByName('mask')
            mask.off(Button.EventType.CLICK)
            mask.on(Button.EventType.CLICK, () => {
                l.active = false;
            }, this)
        });
        this.btnNode.children.forEach((v) => {
            v.off(Button.EventType.CLICK)
            v.on(Button.EventType.CLICK, () => {

                // console.log('click', v.name)
                that.layerNode.children.forEach(l => {
                    l.active = false
                });
                that.layerNode.getChildByName(v.name).active = true
            }, this)
        })
    }

    update(deltaTime: number) {

    }
}


