'use strict';

type Selector<$> = { $: Record<keyof $, any | null> }
export const template = `
<div class="component-container">
<ui-button type="success" class="uiFullButton">全屏</ui-button>
<ui-button type="success" class="horizontalFullButton">水平拉伸</ui-button>
<ui-button type="success" class="verticalFullButton">垂直拉伸</ui-button>
</div>
`;

export const $ = {
    componentContainer: '.component-container',
    uiFullButton: ".uiFullButton",
    horizontalFullButton: ".horizontalFullButton",
    verticalFullButton: ".verticalFullButton",
};
type PanelThis = Selector<typeof $> & { dump: any };
export function update(this: PanelThis, dump: any) {

    this.dump = dump;
}

export function ready(this: PanelThis) {

    this.$.uiFullButton.addEventListener('click', (event: any) => {
        event.stopPropagation();
        console.log('uiFullButton')
        // console.log('node =', this.dump.value)
        // console.log('node uuid1=', this.dump.value.node)
        // console.log('node uuid2=', this.dump.value.node.value)
        // console.log('node uuid2=', this.dump.value.node.value.uuid)

        const nodeUUID = this.dump.value.node.value.uuid
        OnFullWidget(nodeUUID)
    });

    this.$.horizontalFullButton.addEventListener('click', (event: any) => {
        event.stopPropagation();
        console.log('horizontalFullButton')

        const nodeUUID = this.dump.value.node.value.uuid
        OnHorizontalWidget(nodeUUID)
    });

    this.$.verticalFullButton.addEventListener('click', (event: any) => {
        event.stopPropagation();
        console.log('verticalFullButton')

        const nodeUUID = this.dump.value.node.value.uuid
        OnVerticalWidget(nodeUUID)
    });
}

async function OnFullWidget(nodeUUID: any) {

    const d1 = await Editor.Message.request('scene', 'query-node', nodeUUID);
    let index = 0, widgetIndex = 0
    d1.__comps__.forEach(x => {
        // console.log('type=', x.type)
        if (x.type == 'cc.Widget') {
            widgetIndex = index
        }
        index += 1
    })
    // console.log('widgetIndex=', widgetIndex)
    let compStar = '__comps__.' + widgetIndex + '.'

    const alignPathArr = ['isAlignRight', 'isAlignLeft', 'isAlignTop', 'isAlignBottom']
    const editorPathArr = ['editorLeft', 'editorRight', 'editorTop', 'editorBottom']

    for (let index = 0; index < alignPathArr.length; index++) {
        const element = compStar + alignPathArr[index];
        await Editor.Message.request('scene', 'set-property',
            {
                uuid: nodeUUID,
                path: element,
                dump: {
                    type: 'Boolean',
                    value: true,
                },
            },
        );
    }
    for (let index = 0; index < editorPathArr.length; index++) {
        const element = compStar + editorPathArr[index];
        await Editor.Message.request('scene', 'set-property',
            {
                uuid: nodeUUID,
                path: element,
                dump: {
                    type: 'Number',
                    value: 0,
                },
            },
        );
    }
}

async function OnHorizontalWidget(nodeUUID: any) {

    const d1 = await Editor.Message.request('scene', 'query-node', nodeUUID);
    let index = 0, widgetIndex = 0
    d1.__comps__.forEach(x => {
        // console.log('type=', x.type)
        if (x.type == 'cc.Widget') {
            widgetIndex = index
        }
        index += 1
    })
    // console.log('widgetIndex=', widgetIndex)
    let compStar = '__comps__.' + widgetIndex + '.'

    const alignPathArr = ['isAlignRight', 'isAlignLeft', 'isAlignTop', 'isAlignBottom']
    const editorPathArr = ['editorLeft', 'editorRight', 'editorTop', 'editorBottom']

    for (let index = 0; index < alignPathArr.length; index++) {
        const element = compStar + alignPathArr[index];
        const isFull = index < 2
        await Editor.Message.request('scene', 'set-property',
            {
                uuid: nodeUUID,
                path: element,
                dump: {
                    type: 'Boolean',
                    value: isFull,
                },
            },
        );
    }
    for (let index = 0; index < editorPathArr.length - 2; index++) {
        const element = compStar + editorPathArr[index];
        await Editor.Message.request('scene', 'set-property',
            {
                uuid: nodeUUID,
                path: element,
                dump: {
                    type: 'Number',
                    value: 0,
                },
            },
        );
    }
}

async function OnVerticalWidget(nodeUUID: any) {

    const d1 = await Editor.Message.request('scene', 'query-node', nodeUUID);
    let index = 0, widgetIndex = 0
    d1.__comps__.forEach(x => {
        // console.log('type=', x.type)
        if (x.type == 'cc.Widget') {
            widgetIndex = index
        }
        index += 1
    })
    // console.log('widgetIndex=', widgetIndex)
    let compStar = '__comps__.' + widgetIndex + '.'

    const alignPathArr = ['isAlignRight', 'isAlignLeft', 'isAlignTop', 'isAlignBottom']
    const editorPathArr = ['editorLeft', 'editorRight', 'editorTop', 'editorBottom']

    for (let index = 0; index < alignPathArr.length; index++) {
        const element = compStar + alignPathArr[index];
        const isFull = index > 1
        await Editor.Message.request('scene', 'set-property',
            {
                uuid: nodeUUID,
                path: element,
                dump: {
                    type: 'Boolean',
                    value: isFull,
                },
            },
        );
    }
    for (let index = 2; index < editorPathArr.length; index++) {
        const element = compStar + editorPathArr[index];
        await Editor.Message.request('scene', 'set-property',
            {
                uuid: nodeUUID,
                path: element,
                dump: {
                    type: 'Number',
                    value: 0,
                },
            },
        );
    }
}