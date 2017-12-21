define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var version = '1.4.0';
    function load_ipython_extension() {
        console.log("jupyter-echarts " + version + " (echarts 3.8.5) has been loaded");
    }
    exports.load_ipython_extension = load_ipython_extension;
});
