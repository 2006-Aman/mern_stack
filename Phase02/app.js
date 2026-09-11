//it is runtime environment for js to reun locaaly in system
// js was originally built to make front end only but after 2009 due to invention of node backend can also be built using it 
// node js use V8 engine to run js code in backend
//it is non-blocking, event driven, single threaded, asynchronous programming language

console.log("hello world");

// setTimeout is a function which is used to run a code after a specific time interval
setTimeout(() => {
    console.log("hello world after 3 seconds");
}, 3000);

//without impoting anything that is global object in node js is console, setTimeout, setInterval, clearTimeout, clearInterval, __dirname, __filename, require, module, exports
