module.exports = (function (doc, win) {
    var docEl = doc.documentElement; // 获取html标签
    // orientationchange方向改变事件
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        // 当前设备视口宽度
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) { return; }
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
    if (!doc.addEventListener) { return; }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);