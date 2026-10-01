// ==UserScript==
// @name           カスタムCSS挿入
// @description    特定のサイトに自作のCSSを適応します。
// @include        https://*.livedoor.blog/*
// @require        api
// ==/UserScript==

(function() {
    // 挿入したいCSSを記述
    var css = ".blog_ad2 { display:none; }";
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
