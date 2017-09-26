var linesOfBusinessButton = document.getElementById("linesofbusiness");

var businessInfo = {
    "statesInsuranceInfo": [
{
    "lineofbusiness": "General Liability",
    "state": "South Carolina",
    "discount": "20%"
},
{
    "lineofbusiness": "Worker's Compensation",
    "state": "Georgia",
    "discount": "15%"
},
{
    "lineofbusiness": "Fire, Theft, Property",
    "state": "Connecticut",
    "discount": "8%",
    "number": "(3 of 4)"
},
{
    "lineofbusiness": "Inland Marine",
    "state": "Connecticut",
    "discount": "12%"
}
    ]
}

var businessInfoLength = businessInfo.statesInsuranceInfo.length;

function BusinessInfoLoop()
{

    if (businessInfoLength > 0)
    {

        for (i = 0; i < businessInfoLength; i++)
        {


            alert("Line of Business: " + businessInfo.statesInsuranceInfo[i].lineofbusiness + "\n" + "State: " + businessInfo.statesInsuranceInfo[i].state + "\n" + "Discount: " + businessInfo.statesInsuranceInfo[i].discount + "\n" + "\n" + "          " + "(" + (i + 1) + " of " + businessInfoLength + ")");

        }


    }
};




linesOfBusinessButton.addEventListener("click", BusinessInfoLoop, false);