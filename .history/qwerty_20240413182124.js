const request = new XMLHttpRequest()
request.open("GET", 'https://meowfacts.herokuapp.com/')
request.send()

request.addEventListener('load', function() {
    console.log(request.responseText);
    console.log( JSON.parse(request.responseText).data);
    const data = JSON.parse(request.responseText)
    const [text] = data.data
    console.log(text);
})


