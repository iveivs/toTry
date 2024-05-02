const request = new XMLHttpRequest()
request.open("GET", 'https://meowfacts.herokuapp.com/')
request.send()

console.log(request.responseText);

