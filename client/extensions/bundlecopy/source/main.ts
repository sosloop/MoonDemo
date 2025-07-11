const fs = require('fs');
const path = require('path');
var Dirs:Array<string> = [];

/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    /**
     * @en A method that can be triggered by message
     * @zh 通过 message 触发的方法
     */
    showBundels() {
        console.log('查看项目分包=》');

        const assetsDir = path.join(Editor.Project.path, 'assets');
        
        const fils = fs.readdirSync(assetsDir)

        Dirs = []

        let bundles:Array<string> = []
        search(assetsDir,fils)

        Dirs.forEach(x=>{
            const metaPath = x+'.meta'
            if (fs.existsSync(metaPath)) {
                
                const data = fs.readFileSync(metaPath,'utf8')
                const obj = JSON.parse(data)
                if (obj['userData'] && obj['userData']['isBundle']) {
                    if (obj['userData']['bundleName']){
                        bundles.push(`''${obj['userData']['bundleName']}`)
                    }else{
                        bundles.push(`'${path.basename(x)}'`)
                    }
                    console.log('bundle = '+x);
                }

            }
            
        })

        console.log(`[ ${bundles.join(',')} ]`);
    },
    exportExcel(){
        // 批处理文件的路径
        const dir = path.join(Editor.Project.path,'configs')
        const batchFilePath = path.join(Editor.Project.path,'configs','Generate.bat')
 
        // 执行批处理文件
        const c = require('child_process');

        console.log(`path 1=${batchFilePath}`,c)

        c.exec(`start Generate.bat`,{ cwd:dir}, (error:any, stdout:any, stderr:any) => {
        if (error) {
            console.error(`执行的错误: ${error}`);
            return;
        }
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
        });
    },

    createNode(...args:any) {
        Editor.Message.send('scene', 'create-node', args);
    },
};

/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
export function load() { }

/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
export function unload() { }

function search(sPath:string, child:Array<string>) {
    for (let i = 0; i < child.length; i++) {
        // 创建路径
        let newPath = path.join(sPath, child[i]);
        // console.log(newPath);
        
        function walk(path:string) {
            let data = fs.statSync(path);
 
            // 判断是否是目录
            if (data.isDirectory()) {
                // console.log(path);

                Dirs.push(path)

                //获取子路径下所有文件
                let children = fs.readdirSync(path);
                search(path, children);
            }
            // 判断是否是文件
            // if (data.isFile()) {
            //     console.log('--'+path);
            // }    
        };
        walk(newPath);
    }
}