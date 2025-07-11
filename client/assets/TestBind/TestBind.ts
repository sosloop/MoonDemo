import { _decorator, Component, Node ,EventTouch, Vec3, UITransform} from 'cc';
import { BaseView } from './BaseView';
const { ccclass, property } = _decorator;

@ccclass('TestBind')
export class TestBind extends BaseView {

    start() {
        this.Label.Tip.string = '12312313'
        this.addClick(this.Button.Send,()=>{
            console.log('点击事件1')

            this.Label.Tip.string = '11111'
            this.Label.Tip.node.setSiblingIndex(100)
        })

        this.addClick(this.Button.Send2,this.onClickBtn2);

        this.addTouch(this.Item.Cell1.node,this.onTouchStart,this.onTouchMove,this.onTouchEnd)
    }

    update(deltaTime: number) {
        
    }

    onClickBtn2(){
        console.log('点击事件2')
        this.Label.Tip.string = '222222'

        this.Item.Cell1.Label.Tip.string = 'cell2'
    }

    onTouchStart(event: EventTouch){
        console.log('onTouchStart')
    }
    onTouchMove(event: EventTouch){
        console.log('onTouchMove')

        let p = event.getUILocation()
        let cp = this.uiLocal2NodePosition(this.node,p)
        this.Item.Cell1.node.setPosition(cp)
    }
    onTouchEnd(event: EventTouch){
        console.log('onTouchEnd')

        let p = event.getUIStartLocation()
        let cp = this.uiLocal2NodePosition(this.node,p)
        this.Item.Cell1.node.setPosition(cp)
    }
}


