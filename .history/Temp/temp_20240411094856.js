function normalizeUrl(someUrl) {
    let hasHttp = someUrl.startsWith('https://.')
    if(!hasHttp) {
        return 'https://.' + someUrl
    }
    return someUrl
}

console.log(object); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"