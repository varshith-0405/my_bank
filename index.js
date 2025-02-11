let users = [];
let user = {};
document.write("<div id=root></div>");

function showAllUsers() {
  let str = `<h2>All Users Data</h2>`;

  if (users.length === 0) {
    str += `<p>No users registered yet.</p>`;
  } else {
    for (let i = 0; i < users.length; i++) {
      str += `
        <div style="border: 1px solid black; padding: 10px; margin: 10px; border-radius: 8px;">
          <p><b>Name:</b> ${users[i].name}</p>
          <p><b>Email:</b> ${users[i].email}</p>
          <p><b>Date of Birth:</b> ${users[i].dob}</p>
          <p><b>Balance:</b> ${users[i].balance}</p>
        </div>
      `;
    }
  }

  str += `<button onclick='home()'>Back</button>`;
  root.innerHTML = str;
}


function home() {
  let str = `
      <h3>Welcome ${user.name}</h3>
      <button onclick='showLogin()'>Logout</button>
      <button onclick='showAllUsers()'>View All Users</button>
      <p><select id="type" onchange='showUser()'>
         <option value=0>--Select--</option>
         <option value=1>Deposit</option>
         <option value=2>Withdraw</option>
         <option value=3>Transfer</option>
         </select></p>
         <p><select style="display:none" id="selUser"></select></p>
         <p><input type="number" id="amount" placeholder="Enter Amount"></p>
         <button onclick='saveData()'>Submit</button>
         <p><b>Current Balance: <span id='spBalance'>${user.balance}</span></b></p>
      `;

  root.innerHTML = str;
}

function addUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let newUser = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    balance: 0,
  };
  users.push(newUser);
  showLogin();
}

function chkUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      user = users[i];
      home();
      return;
    }
  }
  msg.innerHTML = "Access Denied";
}

function showForm() {
  let str = `
  <h2>Registration Form</h2>
  <p><input type="text" id="name" placeholder="Name"></p>
  <p><input type="text" id="email" placeholder="Email"></p>
  <p><input type="password" id="password" placeholder="Password"></p>
  <p><input type="date" id="dob"></p>
  <p><button onclick='addUser()'>Submit</button></p>
  <p>Already a member?<button onclick='showLogin()'>Login Here</button></p>
  `;
  root.innerHTML = str;
}

function showLogin() {
  let str = `
  <div>
      <h2>Login Form</h2>
      <div id='msg'></div>
      <p><input id="email" type="text" placeholder="enter email"></p>
      <p><input id="password" type="password" placeholder="enter password"></p>
      <button onclick='chkUser()'>Log In</button>
      <p><button onclick='showForm()'>Create Account</button></p>
  </div>
  `;
  root.innerHTML = str;
}

showLogin();
