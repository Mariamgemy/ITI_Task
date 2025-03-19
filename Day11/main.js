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
var updateBtnElm = document.getElementById("updateBtn");
var usersList = [];

submitBtnElem.addEventListener("click", () => {

  var userData = {
    name: nameInputElem.value,
    phoneNumber: phoneNumberInputElem.value,
    mobileNumber: mobileNumberInputElem.value,
    email: emailInputElem.value,
  };

  if (validateUser(userData)) {
    usersList.push(userData);
    displayUsers(usersList);
    clearForm();
  }
});

//------------------------
function validateUser(data) {
  var isValid = true;

  // var nameInputRegExp = RegExp(/^[a-zA-Z\s]+$/);

  if (!RegExp(/^[a-zA-Z\s]+$/).test(data.name)) {
    isValid = false;
    document.getElementById("nameError").innerHTML = "Invalid name";
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
  console.log(RegExp(/^[a-zA-Z\s]+$/).test(data.name));

  //______________________________________________
  var phoneNumberInputRegExp = RegExp(/^\d{8}$/);

  if (!phoneNumberInputRegExp.test(data.phoneNumber)) {
    isValid = false;
    document.getElementById("phoneError").innerHTML = "Invalid phone Number";
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  //___________________________________________________________________
  var mobileNumberRegExp = RegExp(/^01[0-25]\d{8}$/);

  if (!mobileNumberRegExp.test(data.mobileNumber)) {
    isValid = false;
    document.getElementById("mobileError").innerHTML = "Invalid mobile Number";
  } else {
    document.getElementById("mobileError").innerHTML = "";
  }

  //__________________________________________________________________
  var emailInputRegExp = RegExp(/^[\w]+@([\w]+\.)+[\w]+$/);

  if (!emailInputRegExp.test(data.email)) {
    isValid = false;
    document.getElementById("emailError").innerHTML = "Invalid email";
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  return isValid;
}
//________________________________

function displayUsers(list) {
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

var updateIndex;

function setData(index) {
  updateIndex = index;
  var currentUser = usersList[index];
  nameInputElem.value = currentUser.name;
  phoneNumberInputElem.value = currentUser.phoneNumber;
  mobileNumberInputElem.value = currentUser.mobileNumber;
  emailInputElem.value = currentUser.email;

  submitBtnElem.classList.add("hidden");
  updateBtnElm.classList.remove("hidden");
}
updateBtnElm.addEventListener("click", function () {
  var newData = {
    name: nameInputElem.value,
    phoneNumber: phoneNumberInputElem.value,
    mobileNumber: mobileNumberInputElem.value,
    email: emailInputElem.value,
  };
  if (validateUser(newData)) {
    
    usersList.splice(updateIndex, 1, newData);
    displayUsers(usersList);
    clearForm();
  }

  updateBtnElm.classList.add("hidden");
  submitBtnElem.classList.remove("hidden");
});

function deleteUser(index) {
  usersList.splice(index, 1);
  displayUsers(usersList);
}

deleteUser();

function clearForm() {
  nameInputElem.value = "";
  phoneNumberInputElem.value = "";
  mobileNumberInputElem.value = "";
  emailInputElem.value = "";
}
// validateUser();

//------------------------
