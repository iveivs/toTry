function normalizeUrl(someUrl) {
    let hasHttp = someUrl.startsWith('https://.')
    if(!hasHttp) {
        return 'https://.' + someUrl
    }
    return someUrl
}

normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); 