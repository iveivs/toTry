const request = new XMLHttpRequest()
request.open("GET", 'https://meowfacts.herokuapp.com/', false)
request.send()
console.log(request.responseText);