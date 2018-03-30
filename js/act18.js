document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
},false);

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('button[id="LoginButton"]').onclick=handleButtonClick;
})

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else alert('You like ' + event.target.value + ' ice cream.');
}


function handleButtonClick (event) {

  console.log(event)

  // get the value of the input box
  var name =
   document.getElementById("firstname").value + " " + document.getElementById("lastname").value;

  if (name === ""){
    document.getElementById("content")
      .textContent = "Click the button!"
  }else{
    var message = "<h2>Hello " + name + "!</h2>";

    // document
    //   .getElementById("content")
    //   .textContent = message;

    document
      .getElementById("content")
      .innerHTML = message;
  }
}
