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