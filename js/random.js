function getRandom(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
    })
}