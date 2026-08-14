let handleSubmit = async (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    let obj = {
        name,
        email,
        age
    };

    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    });

    alert("User added successfully!");
    getData(); // Refresh list
};

let container = document.getElementById("container");

let getData = async () => {
    let response = await fetch("http://localhost:3000/users");
    let users = await response.json();

    console.log(users);
    displayData(users);
};

let displayData = (data) => {
    container.innerHTML = "";

    data.forEach((user) => {
        container.innerHTML += `
            <div>
                <h2>Name: ${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Age: ${user.age}</p>
                <button onclick="deleteUser('${user.id}')">Delete</button>
                <button>Update</button>
            </div>
        `;
    });
};

getData();

let deleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    });

    alert("User deleted successfully!");
    getData(); // Refresh the list
};

