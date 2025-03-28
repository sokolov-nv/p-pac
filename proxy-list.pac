function FindProxyForURL(url, host) {
    var proxy = "PROXY your.proxy.server:port"; // Укажите ваш прокси

    var proxyDomains = [
        // 🔹 Google (Поиск, API, YouTube, реклама, Firebase)
        "*.google.com",
        "*.googleusercontent.com",
        "*.gstatic.com",
        "*.googleapis.com",
        "*.youtube.com",
        "*.ytimg.com",
        "*.googlevideo.com",
        "*.android.com",
        "*.ggpht.com",
        "*.google-analytics.com",
        "*.firebaseio.com",
        "*.googleadservices.com",
        "*.googlesyndication.com",
        "*.doubleclick.net",

        // 🔹 Google Play (Play Маркет)
        "*.play.google.com",
        "*.gvt1.com",
        "*.gvt2.com",
        "*.googlezip.net",
        "*.android.clients.google.com",
        "*.ota.googlezip.net",
        "*.ota-cache.googlezip.net",

        // 🔹 Google Drive и Облачные сервисы
        "*.drive.google.com",
        "*.docs.google.com",
        "*.sheets.google.com",
        "*.slides.google.com",
        "*.forms.google.com",

        // 🔹 Google для работы и обучения
        "*.googlemail.com",
        "*.googlemeet.com",
        "*.classroom.google.com",

        // 🔹 OpenAI (ChatGPT)
        "*.openai.com",
        "*.chatgpt.com",
        "*.s3.amazonaws.com",
        "*.azure.com",
        "*.bpe.openai.com",
        "*.auth0.openai.com",
        "*.cdn.openai.com",
        "*.cdn.jsdelivr.net",

        // 🔹 Cloudflare
        "*.cloudflare.com",
        "*.cloudflare.net",

        // 🔹 Discord
        "*.discord.com",
        "*.discord.gg",
        "*.discordapp.com",
        "*.discordapp.net",
        "*.discord.media",
        "*.discordstatus.com"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, proxyDomains[i])) {
            return proxy;
        }
    }

    return "DIRECT"; // Весь остальной трафик идёт напрямую
}
