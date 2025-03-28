function FindProxyForURL(url, host) {
    var proxy = "PROXY your.proxy.server:port"; // Укажите ваш прокси

    var proxyDomains = [
        // Google
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

        // OpenAI (ChatGPT)
        "*.openai.com",
        "*.s3.amazonaws.com",
        "*.azure.com",

        // Cloudflare
        "*.cloudflare.com",
        "*.cloudflare.net",

        // Proxy-sale
        "*.proxy-sale.com",

        // Discord
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
