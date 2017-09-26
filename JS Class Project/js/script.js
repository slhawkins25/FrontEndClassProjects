var pinkText = document.getElementById("changecolor");
var firstButton = document.getElementById("buttonone");
var foodInformation = document.getElementById("fastfoodinfo");
var secondButton = document.getElementById("buttontwo");
var thirdButton = document.getElementById("buttonthree");
var dogNameForm = document.getElementById("dognameform");
var dogNameInput = document.getElementById("dogsname");
var dogText = document.getElementById("nametext");

// Pink Text 
function colorChange()
{
   if (pinkText.getAttribute("style") == "color:black;") {
    pinkText.setAttribute("style", "color:pink;");
   }
   else {
       pinkText.setAttribute("style", "color:black;");
   }
}

firstButton.onclick = colorChange;

//Chic-fil-a json object with an array
var fastFood = {
    "restraunts": [
        
        {
        "name": "Wendy's",
        "favoite_item": "Spicy Chicken Sandwhich",
        "calories": 700
        },
        {
        "name": "Moe's",
        "favoite_item": "Burrito Bowl",
        "calories": 550
        },
        {
         "name": "Chic-Fil-A",
         "favoite_item": "Chicken Biscuit",
         "calories": 780
        }
]
}

var chickFilA = fastFood.restraunts[2];

function replaceDivLoop()
{
    foodInformation.innerHTML += '<p>' + "<b>Name: </b>" + chickFilA.name + '<br />' + "<b>Favorite Item : </b>" + chickFilA.favoite_item + '<br />' + "<b>Calories: </b>" + chickFilA.calories + '</p>';
}


secondButton.addEventListener("click", replaceDivLoop, false);

// City names simple object and array
var cityNames = {
    namesOfCities : ["Raleigh", "Washington D.C.", "Miami", "Columbia", "Atlanta"]
    
}
    
// start of city name loop with an alert    
function cityLoop()
{
    if (cityNames.namesOfCities.length > 0)
    {
        for (i = 0; i < cityNames.namesOfCities.length; i = i + 1)
        {
            var city = cityNames.namesOfCities[i];

            if (city === "Columbia")
            {
                alert(city + " is famously HOT!");
            }
            else if (city === "Atlanta")
            {
                alert(city + " - Go Falcons!");
            }
            else
            {
                alert(city);
            }

        }
    }
}


thirdButton.onclick = cityLoop;

//validate a function (dog's name SPAGHETTI)
function validateDogsName()
{
    
    if (dogNameInput.value.toUpperCase() == "SPAGHETTI")
    {

        dogText.innerHTML += '<p style="color:red;">' + "That's my dog's name too!" + '</p>';
        return false;
    }
    else
    {
        alert("Try again!");
        return false;
    }
}
    
    
dogNameForm.onsubmit = validateDogsName;
    
    
    
    
    
 