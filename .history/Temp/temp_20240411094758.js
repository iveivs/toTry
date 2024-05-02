function normalizeUrl(someUrl) {
    let hasHttp = someUrl.startsWith('https://.')
    if(!hasHttp) {
        return 'https://.' someUrl
    }
    return
}