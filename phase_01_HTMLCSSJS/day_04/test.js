console.log("Start");

let t = document.getElementById("title");
setTimeout(function () {
    t.innerText="Maa, Mai Aagya"
}, 3000);

let counter = 0;
let hCount = document.getElementById("count");
setInterval(function (){
    counter++;
    hCount.innerText = counter;
    if(counter==10){
        counter = 0;
    }
}, 1000);

console.log("End");