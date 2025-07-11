import { AssetInfo } from "@cocos/creator-types/editor/packages/asset-db/@types/public";


export function onAssetMenu(assetInfo: AssetInfo) {
    return [
        {
            label: '[自定义]复制Bundle Url',
            click() {
                // bundle的文件夹是bd_开头
                // console.log(assetInfo);
                // url: 'db://assets/Res/Textures/UI/UI/0_Common/bar_bg_bottom_01.png',
                let isHandler = false
                const arr = assetInfo.url.split('.')
                if (arr.length == 2) {
                    let p = arr[0]
                    
                    let sindex = p.indexOf('bd_');
                    if (sindex == -1) {
                        return
                    }
                    let newPath = p.substring(sindex)
                    // if (assetInfo.type === 'cc.Texture2D') {
                    //     newPath+='';
                    // }
                    Editor.Clipboard.clear()
                    Editor.Clipboard.write('text',newPath)
                    console.log('复制到剪切板: '+newPath)
                    isHandler = true
                   
                }

                if (!isHandler) {
                    console.error('未处理')
                }
            },
        },
        {
            label: '[自定义]自定义菜单1',
            submenu: [
                {
                    label: '菜单1_文件夹',
                    enabled: assetInfo.isDirectory,
                    click() {
                        console.log('文件夹');
                        console.log(assetInfo);
                    },
                },
                {
                    label: '菜单1_文件',
                    enabled: !assetInfo.isDirectory,
                    click() {
                        console.log('文件');
                        console.log(assetInfo);
                    },
                },
            ],
        },
    ];
};