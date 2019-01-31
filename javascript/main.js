

//JQuery Stuff here 

//add a border to Harold when hovered, remove border from Harold when not hovered 

$(document).ready(function(){
  $(".harold").mouseenter(function(){
    $(this).addClass('borderClass');
  });
  $(".harold").mouseleave(function(){
    $(this).removeClass('borderClass');
  });

//show city Info for Calgary and Edmonton when location is hovered 
  var city = calgary;
  str = "Name: " + city.name + "<br>" +
        "Latitude: " + city.latitude + "<br>" +
        "Longitude: " + city.longitude + "<br>" +
        "Population: " + city.population + "<br>" +
        "Area: " + city.area + " SqKm <br>" +
        "Density: " + ((city.population)/(city.area)).toFixed(2) + " People/SqKm <br>";

  $("#calgaryLocation").mouseenter(function(){
    $("#displayCity").setText(str);
  });
});



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Create an object:
var calgary = {
  name: "Calgary",
  latitude: 51.0486,
  longitude: -114.0708,
  population: 1096833,
  area: 825.29
};

var edmonton = {
  name: "Edmonton",
  latitude: 53.5444,
  longitude: -113.4909,
  population: 960015,
  area: 684.37
};

/*
    "Name: " + city.name + "<br>" +
    "Latitude: " + city.latitude + "<br>" +
    "Longitude: " + city.longitude + "<br>" +
    "Population: " + city.population + "<br>" +
    "Area: " + city.area + " SqKm <br>" +
    "Density: " + ((city.population)/(city.area)).toFixed(2) + " People/SqKm <br>";

*/