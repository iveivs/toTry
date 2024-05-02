const request = new XMLHttpRequest()
request.open("GET", 'https://meowfacts.herokuapp.com/')
request.send()

request.addEventListener
console.log(request.responseText);

