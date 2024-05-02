function normalizeUrl(someUrl) {
    let hasHttp = someUrl.startsWith('https://.')
    if(!hasHttp) {
        console.log();
        return 'https://.' + someUrl
    }
    return someUrl
}

console.log(normalizeUrl("google.com")); // "https://google.com"
console.log(normalizeUrl("https://ai.fi")); // "https://ai.fi"