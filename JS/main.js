let db = [
  { id: 1, title: "milk", desc: "milky", price: 70 },
  { id: 2, title: "eggs", desc: "chicken", price: 120 },
  { id: 3, title: "meat", desc: "beef", price: 500 },
];

let div = document.querySelector(".productsList");

let status = document.querySelector(".inner");

function checkDb() {
  div.innerHTML = "";
  db.forEach((item) => {
    div.innerHTML += `
    <div class='product'>
    <h2>${item.title}</h2>
    <h3>${item.price}</h3>

    <p>${item.desc}</p>

    </div>
    `;
    console.log(item);
  });
}

function add() {
  let title = prompt("enter title");
  let price = prompt("enter price");
  let description = prompt("enter desc");
  let obj = { title, price, desc: description, id: Date.now() };
  console.log(obj);
  db.push(obj);
}
let usersDb = [
  { userName: "qwert123", password: "12345" },
  { userName: "Farid", password: "54321" },
];
function register() {
  let userName = prompt("Enter name");
  let password = prompt("Enter password");
  if (usersDb.some((item) => item.userName === userName)) {
    alert("username already in use");
    return;
  }
  if (password.length <= 4) {
    alert("short password");
    return;
  }
  let obj = { userName, password };
  usersDb.push(obj);
  console.log(usersDb);
}
function logIn() {
  let logUserName = prompt("Name");
  let logPassword = prompt("Password");

  if (!usersDb.some((item) => item.userName === logUserName)) {
    alert("Registr pls");
    return;
  }
  let userObj = usersDb.find((obj) => obj.userName === logUserName);
  console.log(userObj);
  if (userObj.password !== logPassword) {
    alert("Wrong password");
    return;
  }
  status.style.background = "green";
}
