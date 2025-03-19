// C R U D operations
// C => create
// R => Read
// U => Update
// D => Delete

//------------------------

var nameInputElem = document.getElementById("name");
var phoneNumberInputElem = document.getElementById("phoneNumber");
var mobileNumberInputElem = document.getElementById("mobileNumber");
var emailInputElem = document.getElementById("email");
var tbody = document.getElementById("userTable");

var submitBtnElem = document.getElementById("submitBtn");

var usersList = [];

submitBtnElem.addEventListener("click", () => {
  //   console.log(nameInputElem.value);
  //   console.log(phoneNumberInputElem.value);
  //   console.log(mobileNumberInputElem.value);
  //   console.log(emailInputElem.value);

  var userData = {
    name: nameInputElem.value,
    phoneNumber: phoneNumberInputElem.value,
    mobileNumber: mobileNumberInputElem.value,
    email: emailInputElem.value,
  };

    if (validateUser(userData)) {
  usersList.push(userData);
  displayUser(usersList);
  clearForm();
    }
});

//------------------------

function displayUser(list) {
  //   tbody.innerHTML = "";

  var htmlContainer = "";
  list.forEach((item, index) => {
    // tbody.innerHTML += `
    htmlContainer += `
                    <tr>
                      <td>${item.name}</td>
                      <td>${item.phoneNumber}</td>
                      <td>${item.mobileNumber}</td>
                      <td>${item.email}</td>
                      <td>
                          <button onclick="setData(${index})" class="update-btn">Update</button>
                          <button onclick="deleteUser(${index})" class="delete-btn">Delete</button>
                      </td>
                  </tr>`;
  });

  tbody.innerHTML = htmlContainer;
  console.log(usersList);
}

// function setData(index) {
//   var currentUser = usersList[index];
//   nameInputElem.value = currentUser.name;
//   phoneNumberInputElem.value = currentUser.phoneNumber;
//   mobileNumberInputElem.value = currentUser.mobileNumber;
//   emailInputElem.value = currentUser.email;
// }

function deleteUser(index) {
  usersList.splice(index, 1);
  displayUser(usersList);
}

function clearForm() {
  nameInputElem.value = "";
  phoneNumberInputElem.value = "";
  mobileNumberInputElem.value = "";
  emailInputElem.value = "";
}

function validateUser(data){
  var isValid=true;
  var nameInputRegExp = RegExp(/^[a-zA-Z\s]+$/);
  
  if(!nameInputRegExp.test(data.name)){
    isValid=false;
  document.getElementById("nameError").innerHTML="Invalid name";
  } 
  else{
    document.getElementById("nameError").innerHTML="";
  }
  console.log(nameInputRegExp.test(data.name));
  return isValid;
}

//------------------------

// XXXXXXXXXXXXXXXXXXXXXXX
// var formElem = document.getElementById("userForm");
// formElem.addEventListener("submit", function () {
//   console.log("hi 2222222");
// });
