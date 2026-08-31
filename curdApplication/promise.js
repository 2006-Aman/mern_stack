// console.log("start");

// let fetchData = async () => {
//     try {
//         let response = await fetch("https://dummyjson.com/usersdata/{1}"); 
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         alert("Error fetching data. Please try again later.");
//         console.error("Error fetching data:", error);
//     }
// };

// fetchData();


// using .then method

// let fetchData = () => {
//     fetch("https://dummyjson.com/products")
//         .then((response) =>{
//             return response.json();
//         }).then((json_products) => {
//             console.log(json_products);
//             return fetch("https://dummyjson.com/recipes");
//         }).then((response) => {
//             return response.json();
//         }).then((json_recipes) => {
//             console.log(json_recipes);
//         }).catch((error) => {
//             alert("Error fetching data. Please try again later.");
//             console.error("Error fetching data:", error);
//         });

// }

// fetchData();

let ownPromise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
});


ownPromise.then((message) => {
    console.log("This is in then " + message);
}).catch((message) => {
    console.log("This is in catch " + message);
})


