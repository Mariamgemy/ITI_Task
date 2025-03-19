$.get("https://jsonplaceholder.typicode.com/users", function (data) {

  data.forEach(function (element) {
    $(".tabs").append(
      `<div class='users' id=${element.id}>${element.name}</div>`
    );
  });
  $(".users").click(function (e) {
    $(".content").html(" ");
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.id}`, function (posts) {
       
      posts.forEach(function (element) {
        $(".content").append(`<div class='postBody'>${element.body}</div>`);
      });
    });
  });
});
