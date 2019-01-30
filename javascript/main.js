window.onload = function(){
	// call any functions you want on page load
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function rollover(my_image)
{
  my_image.style.border = "5px solid red";
}

function rollout(my_image)
{
  my_image.style.border = "0px solid blue";
}


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

function displaySection(sectionName) {
  document.getElementById("displayName").innerHTML = sectionName;
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

function displayCityInfo(city) {
  str =
    "Name: " + city.name + "<br>" +
    "Latitude: " + city.latitude + "<br>" +
    "Longitude: " + city.longitude + "<br>" +
    "Population: " + city.population + "<br>" +
    "Area: " + city.area + " SqKm <br>" +
    "Density: " + ((city.population)/(city.area)).toFixed(2) + " People/SqKm <br>";
	document.getElementById("displayCity").innerHTML = str;
}

function removeCityInfo(){

  str = "";
  document.getElementById("displayCity").innerHTML = str;
}
