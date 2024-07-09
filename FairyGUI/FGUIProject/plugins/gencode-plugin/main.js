"use strict";
//FYI: https://github.com/Tencent/puerts/blob/master/doc/unity/manual.md
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDestroy = exports.onPublish = void 0;
const GenCode_CSharp_1 = require("./GenCode_CSharp");
// var menu = FairyEditor.App.menu.GetSubMenu("tool")
// menu.AddItem("删除生成", "删除生成代码和资源", (name) => {
//     console.log("call menuitem." + name);
//     // let pkgs = FairyEditor.App.project.allPackages
//     // for (let i = 0; i < pkgs.Count; i++) {
//     //     let pkg = pkgs.get_Item(i);
//     //     console.log("codePath=" + pkg.publishSettings.codePath)
//     //     console.log("path=" + pkg.publishSettings.path)
//     // }
//     // let p = FairyEditor.App.pluginManager.basePath
//     // console.log(p)
//     // CS.System.IO.Directory.Delete(handler.exportCodePath, true)
//     // let p = FairyEditor.App.project.basePath
//     // console.log(p)
//     // CS.System.IO.Directory.Delete(p + "../../BallAction/Assets/Bundles/FUI", true)
//     // CS.System.IO.Directory.Delete(p + "../../BallAction/Assets/Hotfix/FUIGen", true)
//     // CS.System.IO.Directory.Delete(p + "../../BallAction/Assets/Resources/FUI", true)
//     // CS.System.IO.Directory.Delete(p + "../../BallAction/Assets/Mono/FUIGen", true)
//     // console.log("删除完成")
// });
function onPublish(handler) {
    if (!handler.genCode)
        return;
    handler.genCode = false; //prevent default output
    console.log('Handling gen code in plugin');
    (0, GenCode_CSharp_1.genCode)(handler); //do it myself
}
exports.onPublish = onPublish;
function onDestroy() {
    //do cleanup here
    // menu.RemoveItem("删除生成代码和资源");
}
exports.onDestroy = onDestroy;
