import { _decorator, Component, Node } from 'cc';
import { BaseView } from './BaseView';
const { ccclass, property } = _decorator;

@ccclass('TestBind')
export class TestBind extends BaseView {
    start() {
        this.Label.Tip.string = '12312313'
    }

    update(deltaTime: number) {
        
    }
}


