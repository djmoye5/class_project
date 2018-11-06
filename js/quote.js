var quoteContainer = document.querySelector(".quoteContainer");
var author = document.querySelector(".author");

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  }

   

  function singleQuote() {
    fetch(`http://api.techlaunch.io:88/${}`)
      .then(function (response) {
      return response.json();
      })
      .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        quoteContainer.innerHTML += `
        <a href="quote.html?id=${data[i].id}">
          <div class="container">
          <p>${data[i].text}</p>
          <p>${data[i].author}</p>
          </div>
          `
      }
    }) 
  }

  singleQuote()