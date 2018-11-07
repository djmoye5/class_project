var random = document.querySelector("#random")



function getRandom(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      random.innerHTML += `
      <div class= "container">
        <p> "${data.text}" <br> -${data.author} <br>
        <a href="${data.source}" target="_blank"> ${data.source} </a> </p>
        </div>`
    })
      .catch(function(error){
        console.log("There was an error!!")
      })
}