document.addEventListener("DOMContentLoaded", function() {
    var tel = document.querySelectorAll("a.elementor-social-icon-telegram-plane");
    tel.forEach(function(a) {
        a.href = TELEGRAM_URL;
    });
    var tw = document.querySelectorAll("a.elementor-social-icon-x-twitter");
    tw.forEach(function(a) {
        a.href = TWITTER_URL;
    });
    var headings = document.querySelectorAll(".elementor-heading-title");
    headings.forEach(function(e) {
        var t = e.textContent || "";
        if (t.trim().startsWith("CA:")) {
            e.textContent = "CA:" + CONTRACT_ADDRESS;
        }
    });

    var dsHeader = document.querySelectorAll("a.elementor-repeater-item-f8efebd");
    dsHeader.forEach(function(a) {
        a.href = DEXSCREENER_URL;
        a.target = "_blank";
        a.rel = "noopener";
    });

    var dexTools = document.querySelectorAll("a.elementor-repeater-item-29e9366");
    dexTools.forEach(function(a) {
        a.style.display = "none";
    });
});