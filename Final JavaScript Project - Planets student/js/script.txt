var sunButton = document.getElementById("sun");
var sunInformation = document.getElementById("sunparagraph");
var mercuryButton = document.getElementById("mercury");
var jupiterButton = document.getElementById("jupiter");
var jupiterParagraph = document.getElementById("textforjupiter");


//Sun js starts here
function appearSunInfo()  // Makes the paragraph under the sun appear
{
    sunInformation.setAttribute("style", "display: block;");
}

function disappearSunInfo() // Makes the paragraph under the sun disappear
{
    sunInformation.setAttribute("style", "display: none;");
}
   

sunButton.onmouseover = disappearSunInfo;
sunButton.onmouseout = appearSunInfo;

// Sun js ends here

//Mercury js starts here

var mercuryInformation = {
    planetMercury : ["Mercury is the smallest planet.", "Mercury is the messanger god.", "Mercury is red.", "Mercury is also in thermometers."]
};

//Mercury alert and array info

function mercuryInfoPop() {

    alert(mercuryInformation.planetMercury[0] + "\n" + mercuryInformation.planetMercury[1] + "\n" + mercuryInformation.planetMercury[2] + "\n" + mercuryInformation.planetMercury[3]);
}

mercuryButton.addEventListener("click", mercuryInfoPop, false);

//Mercury js ends here

//Jupiter starts here

var jupiterInformation = {
    "planetJupiter" : [    
        "is the largest planet",
         "has a big storm",
         "has four moons",
         "spins faster than any other planet",
         "is 483,682,810 miles from the sun"
    ]
};

var jupLength = jupiterInformation.planetJupiter.length;

function jupiterInfoLoop() 
{

if (jupLength > 0)
{
    jupiterParagraph.innerHTML = '<p>' + " " + '</p>';
  
    for (i = 0; i < jupLength; i++)
    {
        if (jupiterInformation.planetJupiter[i] === "has a big storm")
        {
         jupiterParagraph.innerHTML += '<p style="color:red; font-size:.5em;">' + "Jupiter: " + jupiterInformation.planetJupiter[i] + '</p>';   
        }
         else if (jupiterInformation.planetJupiter[i] === "has four moons")
        {
         jupiterParagraph.innerHTML += '<p style="font-size:1em;">' + "Jupiter: " + jupiterInformation.planetJupiter[i] + '</p>';   
        }
         else 
        {
         jupiterParagraph.innerHTML += '<p style="font-size:.5em;">' + "Jupiter: " + jupiterInformation.planetJupiter[i] + '</p>'   
        }
    }
} 
};


jupiterButton.addEventListener("click", jupiterInfoLoop, false);

// Jupiter ends here

// Sun animation

 function rotateSunAnimation () 
 {
  sunButton.style.transform = "rotate(360deg)";
  sunButton.style.transitionDuration = "4s";
 }

sunButton.addEventListener("click", rotateSunAnimation, false); 

//End of Sun animation

//Jupiter animation

function rotateJupiterAnimation () 
 {

  jupiterButton.style.transform = "rotateY(360deg)";
  jupiterButton.style.transitionDuration = "4s";
 }

jupiterButton.onmouseover = rotateJupiterAnimation;


