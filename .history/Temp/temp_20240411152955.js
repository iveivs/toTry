function normalizeUrl(someUrl) {
    let hasHttp = someUrl.startsWith('https://')
    // console.log('out', hasHttp);
    if(!hasHttp) {
        return 'https://' + someUrl
    }
    return someUrl
}

console.log(normalizeUrl("google.com")); // "https://google.com"
console.log(normalizeUrl("https://ai.fi")); // "https://ai.fi"