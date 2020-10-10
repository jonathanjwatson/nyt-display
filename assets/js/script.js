$(document).ready(function () {
  //   console.log("Hello world!");

  function getData(searchTerm) {
    var apiKey = "l5HU2YbHdcssLJ4lmpADRhdwtPkeohFA";
    $.ajax({
      url:
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        apiKey +
        "&q=" +
        searchTerm,
      method: "GET",
    }).then(function (response) {
      console.log(response.response.docs);
      displayArticles(response.response.docs);
    });
  }

  function displayArticles(arrayOfArticles) {
    for (var i = 0; i < arrayOfArticles.length; i++) {
      var title = $("<h3>");
      title.text(arrayOfArticles[i].abstract);``
      $("#articles").append(title);
    }
  }

  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    var userSearchTerm = $("#search-input").val();
    console.log(userSearchTerm);
    getData(userSearchTerm);
  });
});
