document.querySelector('h1').innerHTML = "Dom Practice";
var body = document.querySelector('body');
var currentBodyHTML = body.innerHTML 
console.log(`original body HTML is ${currentBodyHTML}`);
body.innerHTML = currentBodyHTML + "<h2>create h2 tag</h2>";
console.log(`current body HTML is ${body.innerHTML}`);