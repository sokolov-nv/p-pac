function FindProxyForURL(url, host) {
    var proxy = "PROXY your.proxy.server:port"; // Укажите ваш прокси

    var proxyDomains = [
        // Google (Play, поиск, API и т.д.)
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
        
        // Google Play
        "*.play.google.com",
        "*.gvt1.com",
        "*.gvt2.com",
        "*.googlezip.net",

        // OpenAI (ChatGPT)
        "*.openai.com",
        "*.chatgpt.com",
        "*.s3.amazonaws.com",
        "*.azure.com",
        "*.auth0.openai.com",

        // Cloudflare
        "*.cloudflare.com",
        "*.cloudflare.net",

        // Discord
        "*.discord.com",
        "*.discord.gg",
        "*.discordapp.com",
        "*.discordapp.net",
        "*.discord.media",
        "*.discordstatus.com"
    ];

    // Перебираем домены, и если они совпадают, возвращаем прокси
    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, proxyDomains[i])) {
            return proxy;
        }
    }

    return "DIRECT"; // Весь остальной трафик идёт напрямую
}
