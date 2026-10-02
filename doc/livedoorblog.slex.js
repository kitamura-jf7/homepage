// ==UserScript==
// @name           カスタムCSS挿入
// @description    特定のサイトに自作のCSSを適応します。
// @match          https://*.livedoor.blog/*
// ==/UserScript==

(function() {
    try {
        alert('test1'); // これが表示されれば、まず読み込みは成功しています

        var css = ".blog_ad2 { display:none !important; }";
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        
        if (document.head) {
            document.head.appendChild(style);
            alert('test2'); // CSSが正常に挿入されれば表示されます
        }
    } catch (e) {
        alert('エラーが発生しました: ' + e.message);
    }
})();
