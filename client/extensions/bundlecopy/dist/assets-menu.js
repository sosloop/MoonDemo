"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
function onAssetMenu(assetInfo) {
    return [
        {
            label: '[自定义]复制Bundle Url',
            click() {
                // bundle的文件夹是bd_开头
                // console.log(assetInfo);
                // url: 'db://assets/Res/Textures/UI/UI/0_Common/bar_bg_bottom_01.png',
                let isHandler = false;
                const arr = assetInfo.url.split('.');
                if (arr.length == 2) {
                    let p = arr[0];
                    let sindex = p.indexOf('bd_');
                    if (sindex == -1) {
                        return;
                    }
                    let newPath = p.substring(sindex);
                    // if (assetInfo.type === 'cc.Texture2D') {
                    //     newPath+='';
                    // }
                    Editor.Clipboard.clear();
                    Editor.Clipboard.write('text', newPath);
                    console.log('复制到剪切板: ' + newPath);
                    isHandler = true;
                }
                if (!isHandler) {
                    console.error('未处理');
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
}
exports.onAssetMenu = onAssetMenu;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXNzZXRzLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsU0FBZ0IsV0FBVyxDQUFDLFNBQW9CO0lBQzVDLE9BQU87UUFDSDtZQUNJLEtBQUssRUFBRSxtQkFBbUI7WUFDMUIsS0FBSztnQkFDRCxtQkFBbUI7Z0JBQ25CLDBCQUEwQjtnQkFDMUIsdUVBQXVFO2dCQUN2RSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQ3JCLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNwQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBRWQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7d0JBQ2QsT0FBTTtxQkFDVDtvQkFDRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNqQywyQ0FBMkM7b0JBQzNDLG1CQUFtQjtvQkFDbkIsSUFBSTtvQkFDSixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUN4QixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFBO2lCQUVuQjtnQkFFRCxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ3ZCO1lBQ0wsQ0FBQztTQUNKO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsYUFBYTtZQUNwQixPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLE9BQU8sRUFBRSxTQUFTLENBQUMsV0FBVztvQkFDOUIsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO2lCQUNKO2dCQUNEO29CQUNJLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXO29CQUMvQixLQUFLO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzNCLENBQUM7aUJBQ0o7YUFDSjtTQUNKO0tBQ0osQ0FBQztBQUNOLENBQUM7QUF2REQsa0NBdURDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzc2V0SW5mbyB9IGZyb20gXCJAY29jb3MvY3JlYXRvci10eXBlcy9lZGl0b3IvcGFja2FnZXMvYXNzZXQtZGIvQHR5cGVzL3B1YmxpY1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFzc2V0TWVudShhc3NldEluZm86IEFzc2V0SW5mbykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnW+iHquWumuS5iV3lpI3liLZCdW5kbGUgVXJsJyxcclxuICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBidW5kbGXnmoTmlofku7blpLnmmK9iZF/lvIDlpLRcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFzc2V0SW5mbyk7XHJcbiAgICAgICAgICAgICAgICAvLyB1cmw6ICdkYjovL2Fzc2V0cy9SZXMvVGV4dHVyZXMvVUkvVUkvMF9Db21tb24vYmFyX2JnX2JvdHRvbV8wMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgbGV0IGlzSGFuZGxlciA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBhc3NldEluZm8udXJsLnNwbGl0KCcuJylcclxuICAgICAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGFyclswXVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaW5kZXggPSBwLmluZGV4T2YoJ2JkXycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQYXRoID0gcC5zdWJzdHJpbmcoc2luZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhc3NldEluZm8udHlwZSA9PT0gJ2NjLlRleHR1cmUyRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmV3UGF0aCs9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXRvci5DbGlwYm9hcmQuY2xlYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXRvci5DbGlwYm9hcmQud3JpdGUoJ3RleHQnLG5ld1BhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WkjeWItuWIsOWJquWIh+advzogJytuZXdQYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5pyq5aSE55CGJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdb6Ieq5a6a5LmJXeiHquWumuS5ieiPnOWNlTEnLFxyXG4gICAgICAgICAgICBzdWJtZW51OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfoj5zljZUxX+aWh+S7tuWkuScsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogYXNzZXRJbmZvLmlzRGlyZWN0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5paH5Lu25aS5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzc2V0SW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfoj5zljZUxX+aWh+S7ticsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogIWFzc2V0SW5mby5pc0RpcmVjdG9yeSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aWh+S7ticpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhc3NldEluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG59OyJdfQ==