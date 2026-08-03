let person = {
    name: "Aman",
    age: 20,
    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    },
    marks: [90, 80, 70, 60]
}
console.log(person.name); 
console.log(person.address.city);
console.log(person.marks[2]);
console.log(person["age"]);

let student = new Object();
student['name'] = "Yogesh";
student['age'] = 21;
student['dob'] = "2002-01-01";
console.log(student)

for(let key in student) {
    console.log(key + ": " + student[key]);
}

let obj = {model: "iPhone", price: 1000, color: "black"};
delete obj.color;
console.log(obj);

console.log(obj.hasOwnProperty("model"));

let obj1 = {model: "iPhone", price: 1000, color: "black"};
console.log(Object.keys(obj1).length);


let {name, age, address: {city, state, country}} = person;
console.log(name);
console.log(age);
console.log(city);


for(let i = 0; i < person.marks.length; i++) {
    console.log(person.marks[i]);
}