var worst_breed = function find_breed() {
  name = document.getElementById("user_name").value;
  var maxCount = 99;
  var maxI = 0;
  var out = 1;
  var i = 1;

  //search for vowels
  if (name.length > 0) {
      for (i; i < breeds.length; i++) {
        out = hamming.distance(name, breeds[i]);
        if (out < maxCount) {
          maxCount = out;
          maxI = i;
        }
      }

  } else {
    document.getElementById("breed_text").innerHTML = "Please enter your favorite ice cream flavor";
  }

  //Print breed
  console.log(maxI);
  console.log(maxCount);
  document.getElementById("breed_text").innerHTML = 'You should get a ' + breeds[maxI];

  //Show breed image.
  fetch('https://dog.ceo/api/breed/' + breeds[maxI] + '/images/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(retJson) {
      dog_img = retJson.message;
      document.getElementById("breed_image").innerHTML = '<img src=' + dog_img + '></img>';
  });
}

var breeds;
var name;

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(retJson => {
        breeds = Object.keys(retJson.message);
        button.addEventListener("click", worst_breed);
});
