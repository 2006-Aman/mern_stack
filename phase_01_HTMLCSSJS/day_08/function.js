let x = function(a) {
    return a**2;
}
console.log(x(5));


let checkNationality = function(country = "Indian") {  // default parameter
    return `this person has ${country} nationality`;
}
// let res = checkNationality("Indian");
// console.log(res);


let res = (a,b)=>{
    let c = 10;
    let num  = (a+b)-c
    return num
}
console.log(res(10,20));