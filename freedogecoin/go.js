// 換紅包時只改這個檔最上面的 TOKEN。所有平台專屬網址（ig/tt/yt/th）都讀這一份。
  // ── 換紅包時只改這一行的 TOKEN ──────────────────────────────
  var TOKEN = "GDGUT7DS";
  // ───────────────────────────────────────────────────────────
  var BASE = "https://link.pionex.com/?url=https%3A%2F%2Fwww.pionex.com%2F";
  var TAIL = "%2Fred-packet&referral=BTCto1M&page=RedPacket&redPacketToken=" + TOKEN;
  var zh = (navigator.language || "en").toLowerCase().indexOf("zh") === 0;
  var LINK = BASE + (zh ? "zh-TW" : "en") + TAIL;
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("go").href = LINK;
    if (zh) document.body.classList.add("zh");
    // ?stay=1 只看畫面不跳轉（測試用）；?lang=zh / ?lang=en 可強制語言
    var q = location.search;
    if (q.indexOf("lang=zh") > -1) { document.body.classList.add("zh"); }
    if (q.indexOf("lang=en") > -1) { document.body.classList.remove("zh"); }
    // 延遲 1.2 秒再跳，讓 Cloudflare 統計送得出去
    if (q.indexOf("stay=1") === -1) setTimeout(function () { location.replace(LINK); }, 1200);
  });
