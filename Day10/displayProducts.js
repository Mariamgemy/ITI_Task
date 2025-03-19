var products = [
  {
    name: "Product lap 1",
    image:
      "https://m.media-amazon.com/images/I/71ggPeuFeiL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    quantity: 10,
    discount: 15,
    offerDuration: "3 days",
    category: "Electronics",
  },
  {
    name: "Product 2",
    image: "https://m.media-amazon.com/images/I/51tTGsxwIKL._AC_UL320_.jpg",
    description: "Sed sit amet libero vel lorem posuere faucibus.",
    price: 29.99,
    quantity: 5,
    discount: 10,
    offerDuration: "2 days",
    category: "Electronics",
  },
  {
    name: "Product 3",
    image: "https://m.media-amazon.com/images/I/61gMuwt5H5L._SY466_.jpg",
    description: "Nullam et velit vestibulum, congue quam a.",
    price: 24.99,
    quantity: 8,
    discount: 0,
    offerDuration: "2 days",
    category: "Books",
  },
  {
    name: "Product 4",
    image: "https://m.media-amazon.com/images/I/51hTiA1kExL._SX342_SY445_.jpg",
    description: "Nullam et velit vestibulum, congue quam a.",
    price: 24.99,
    quantity: 8,
    discount: 0,
    offerDuration: "5 days",
    category: "Books",
  },
  {
    name: "Product 5",
    image: "https://m.media-amazon.com/images/I/5109jJulh0L._SY466_.jpg",
    description: "Nullam et velit vestibulum, congue quam a.",
    price: 24.99,
    quantity: 8,
    discount: 0,
    offerDuration: "",
    category: "Books",
  },
  {
    name: "Product lap 5",
    image: "https://m.media-amazon.com/images/I/5109jJulh0L._SY466_.jpg",
    description: "Nullam et velit vestibulum, congue quam a.",
    price: 24.99,
    quantity: 8,
    discount: 0,
    offerDuration: "",
    category: "Books",
  },
];

var productsContainer = document.getElementById("product-grid");
var categoryContainer = document.getElementById("category-list");
var searchInput = document.getElementById("search-input");
var categoryList = [];
//-------------------------------------------

function getHTML(product) {
  return `<div class="product-card">
    <img src="${product.image}" alt="">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="price">Price: ${product.price}</div>
    <div class="quantity">Available Quantity: ${product.quantity}</div>
</div>`;
}

function displayProducts() {
  // anonymouse function
  productsContainer.innerHTML = "";
  products.forEach(function myFunc(element) {
    productsContainer.innerHTML += getHTML(element);
  });
}

function searchProducts() {
  searchInput.addEventListener("input", function (event) {
    var searchTerm = event.target.value.trim().toLowerCase();

    var temp = [];
    for (const element of products) {
      //   if (searchTerm === element.name.toLowerCase()) {
      if (
        element.name.toLowerCase().includes(searchTerm) ||
        // element.price == searchTerm
        Math.trunc(element.price) === Number(searchTerm)
      ) {
        temp.push(element);
      }
    }

    console.log(temp);
    productsContainer.innerHTML = "";
    temp.forEach(function (element) {
      productsContainer.innerHTML += getHTML(element);
    });
    // console.log(searchTerm);
  });
}

function createCategoryList() {
  categoryList.push("All");
  products.forEach(function (element) {
    categoryList.push(element.category);
  });

  categoryList = new Set(categoryList);
}

console.log(categoryList);
searchProducts();
displayProducts();
createCategoryList();

function displayCategory() {
  categoryList.forEach(function (category) {
    // categoryContainer.innerHTML += `<li onclick="">${category}</li>`;

    var listItem = document.createElement("li");

    listItem.innerHTML = category;
    listItem.addEventListener("click", function (event) {
      console.log();
      //-----------------------------------------------

      Array.from(listItem.parentElement.children).forEach(function (element) {
        element.style.color = "black";
        element.style.fontWeight = "lighter";
      });

      listItem.style.color = "red";
      listItem.style.fontWeight = "bold";

      //-----------------------------------------------
      var temp = [];
      products.forEach(function (element) {
        if (element.category == event.target.textContent) {
          temp.push(element);
        } else {
          temp = products;
        }
      });

      console.log(temp);
      productsContainer.innerHTML = "";
      temp.forEach(function (element) {
        productsContainer.innerHTML += getHTML(element);
      });
    });

    categoryContainer.appendChild(listItem);
  });
}
// console.log(categoryList);

displayCategory();
//---------------------
// [1, "Ali", 3].forEach(function myFunc(item, index, array) {
//   console.log(item);

//   //   console.log(arguments);
// });

// // myFunc(element,index,array)

//-------------------------------------------------

// input event
// document
//   .getElementById("search-input")
//   .addEventListener("input", function (event) {
//     console.log(event.target.value);
//   });
//-------------------------------------------------

// new Set()

// var arr = ["Ali", "Ahmed", "Ali"];
// console.log(arr);

// var setArr = new Set(arr);
// console.log(setArr);
