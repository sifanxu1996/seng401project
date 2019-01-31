
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

  str = "Name: " + calgary.name + "<br>" +
        "Latitude: " + calgary.latitude + "<br>" +
        "Longitude: " + calgary.longitude + "<br>" +
        "Population: " + calgary.population + "<br>" +
        "Area: " + calgary.area + " SqKm <br>" +
        "Density: " + ((calgary.population)/(calgary.area)).toFixed(2) + " People/SqKm <br>";

  str2 = "Name: " + edmonton.name + "<br>" +
        "Latitude: " + edmonton.latitude + "<br>" +
        "Longitude: " + edmonton.longitude + "<br>" +
        "Population: " + edmonton.population + "<br>" +
        "Area: " + edmonton.area + " SqKm <br>" +
        "Density: " + ((edmonton.population)/(edmonton.area)).toFixed(2) + " People/SqKm <br>";

//JQuery Stuff here 

//add a border to Harold when hovered, remove border from Harold when not hovered 

$(document).ready(function(){
  $(".harold").mouseenter(function(){
    $(this).addClass('borderClass');
  });
  $(".harold").mouseleave(function(){
    $(this).removeClass('borderClass');
  });

//show calgary Info for Calgary and Edmonton when location is hovered 

  $("#calgaryLocation").mouseenter(function(){
    $("#displayCity").append(str);
  });
  $("#calgaryLocation").mouseleave(function(){
    $("#displayCity").text("");
  });

  $("#edmontonLocation").mouseenter(function(){
    $("#displayCity").append(str2);
  });
  $("#edmontonLocation").mouseleave(function(){
    $("#displayCity").text("");
  });

//when we hover over the area, it's name is displayed on the top

  $(".headerclass").mouseenter(function(){
    $("#displayName").append($(this).attr('id'));
  });

  $(".headerclass").mouseleave(function(){
    $("#displayName").text("");
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




/*
    "Name: " + calgary.name + "<br>" +
    "Latitude: " + calgary.latitude + "<br>" +
    "Longitude: " + calgary.longitude + "<br>" +
    "Population: " + calgary.population + "<br>" +
    "Area: " + calgary.area + " SqKm <br>" +
    "Density: " + ((calgary.population)/(calgary.area)).toFixed(2) + " People/SqKm <br>";

*/