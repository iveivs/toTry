const request = new XMLHttpRequest()
request.open("GET", 'https://meowfacts.herokuapp.com/')
request.send()

request.addEventListener('load', function() {
    console.log();
})
console.log(request.responseText);

