// 按命名规范，重命名
import { Node, Button, Component, dragonBones, EditBox, Graphics, Label, MotionStreak, ProgressBar, RichText, ScrollView, Slider, Sprite, Toggle, _decorator, EventTouch, UITransform, Vec3, Vec2 } from "cc";

const _TempV3Pos = new Vec3();

const ITEM_Prefix = 'Item';

let SYS_STANDARD_Separator = '.';
let SeparatorMap: { [key: string]: string } = {
    "Node": "cc.Node",
    "Label": "cc.Label",
    "Button": "cc.Button",
    "Sprite": "cc.Sprite",
    "RichText": "cc.RichText",
    "Mask": "cc.Mask",
    "MotionStreak": "cc.MotionStreak",
    "TiledMap": "cc.TiledMap",
    "TiledTile": "cc.TiledTile",
    "Spine": "sp.Spine",
    "Graphics": "cc.Graphics",
    "Animation": "cc.Animation",
    "WebView": "cc.WebView",
    "EditBox": "cc.EditBox",
    "ScrollView": "cc.ScrollView",
    "VideoPlayer": "cc.VideoPlayer",
    "ProgressBar": "cc.ProgressBar",
    "PageView": "cc.PageView",
    "Slider": "cc.Slider",
    "Toggle": "cc.Toggle",
    "PolyButton": "CCPolyButton",
    "DragonBon": "dragonBones.ArmatureDisplay",
    "Item": "BaseView"
};
const { ccclass, property } = _decorator;
@ccclass('BaseView')
export class BaseView extends Component {
    public vdata = null;
    $collector: string;
    Node: { [name: string]: Node } = {};
    Label: { [name: string]: Label } = {};
    Button: { [name: string]: Button } = {};
    Sprite: { [name: string]: Sprite } = {};
    RichText: { [name: string]: RichText } = {};
    MotionStreak: { [name: string]: MotionStreak } = {};
    Graphics: { [name: string]: Graphics } = {};
    EditBox: { [name: string]: EditBox } = {};
    ScrollView: { [name: string]: ScrollView } = {};
    ProgressBar: { [name: string]: ProgressBar } = {};
    Slider: { [name: string]: Slider } = {};
    DragonBon: { [name: string]: dragonBones.ArmatureDisplay } = {}
    Toggle: { [name: string]: Toggle } = {};
    Item: { [name: string]: BaseView } = {};

    __preload() {
        this.bindComponent(this);
    }
    setvData(data) {
        this.vdata = data;
    }
    // 绑定组件
    public bindComponent(component) {
        this.bindNode(component.node, component);
    }
    // 绑定node
    public bindNode(node: Node, component) {
        if (component.$collector === node.uuid) {
            console.warn(`重复绑定退出.${node.name}`)
            return;
        }
        component.$collector = node.uuid;
        this._bindSubNode(node, component);
    }

    // 绑定子节点
    private _bindSubNode(node: Node, component) {

        // 检测前缀是否符合绑定规范
        let name = node.name;
        if (this.checkNodePrefix(name)) {
            // 获得这个组件的类型 和 名称
            let names = this.getPrefixNames(name);

            if (names === null || names.length !== 2 || !SeparatorMap[names[0]]) {
                console.log(`${name} 命令不规范, 请使用Label.xxx的格式!`);
                return;
            }

            // console.log(component.node.name +' _bindSubNode = '+name)

            // 未定义的类型
            if (!component[`${names[0]}`]) {
                console.log(`${name[0]}s没有在BaseUIForm中定义, 并不会影响运行`);
                component[`${names[0]}`] = {};
            }
            if (component[`${names[0]}`][names[1]]) {
                console.log(`${name} 已经被绑定了, 请检查您是否出现了重名的情况!`);
            }
            if (SeparatorMap[names[0]] === 'Node') {
                component[`${names[0]}`][names[1]] = node;
            } else {
                const comp = node.getComponent(SeparatorMap[names[0]]);
                if (comp == null) {
                    console.error(`${name} ${SeparatorMap[names[0]]}组件不存在！`)
                }
                component[`${names[0]}`][names[1]] = comp;

                if (name.startsWith(ITEM_Prefix) && component !== comp) {
                    // console.log(component.name,comp.name)
                    console.log(name + '子节点不参与绑定！')
                    return;
                }
            }
        }

        // 绑定子节点
        node.children.forEach((target: Node) => {
            this._bindSubNode(target, component);
        });

    }


    /**
     * 寻找子节点
     */
    public FindChildInNode(nodeName: string, rootNode: Node): Node {
        if (rootNode.name == nodeName) {
            return rootNode;
        }

        for (let i = 0; i < rootNode.children.length; i++) {
            let node = this.FindChildInNode(nodeName, rootNode.children[i]);
            if (node) {
                return node;
            }
        }
        return null;
    }

    /** 检测前缀是否符合绑定规范 */
    public checkNodePrefix(name: string) {
        if (name.indexOf(SYS_STANDARD_Separator) == -1) {
            return false;
        }
        return true;
    }
    /** 获得类型和name */
    public getPrefixNames(name: string) {
        if (name === null) {
            return;
        }
        return name.split(SYS_STANDARD_Separator);
    }

    private _getComponentName(component: Component) {
        return component.name.match(/<.*>$/)[0].slice(1, -1);
    }

    public addClick(btn: Button, action: Function) {
        btn.node.targetOff(Button.EventType.CLICK);
        btn.node.on(Button.EventType.CLICK, action, this);
    }

    public addTouch(n: Node, touchStart: (event: EventTouch) => void, touchMove: (event: EventTouch) => void, touchEnd: (event: EventTouch) => void) {
        n.targetOff(Node.EventType.TOUCH_START);
        n.targetOff(Node.EventType.TOUCH_MOVE);
        n.targetOff(Node.EventType.TOUCH_END);
        n.targetOff(Node.EventType.TOUCH_CANCEL);
        n.on(Node.EventType.TOUCH_START, touchStart, this);
        n.on(Node.EventType.TOUCH_MOVE, touchMove, this);
        n.on(Node.EventType.TOUCH_END, touchEnd, this);
    }

    public getPositionInView(item: Node, scrollViewNode: Node):Vec3 {
        // get item position in scrollview's node space
        let worldPos = item.parent!.getComponent(UITransform)!.convertToWorldSpaceAR(item.position);
        let viewPos = scrollViewNode.getComponent(UITransform)!.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    public uiLocal2NodePosition(n:Node,v2:Vec2):Vec3{
        _TempV3Pos.set(v2.x,v2.y);
        return n.getComponent(UITransform).convertToNodeSpaceAR(_TempV3Pos)
    }
}