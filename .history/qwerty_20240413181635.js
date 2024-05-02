const request = new XMLHttpRequest()
request.open("GET", 'https://meowfacts.herokuapp.com/')
request.send()

request.addEventListener('load', function() {
    const data = JSON.parse(request.responseText)
    const [text] = data.data
    console.log(object);
})


