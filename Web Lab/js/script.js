var popButton = document.getElementById("buttonpop");
var discountsParagraph = document.getElementById("discountspara");
var discountsInfo = document.getElementById("dicountsinfopara");



var businessInfo = {
    "statesInsuranceInfo": [
{ 
            "lineofbusiness" : "General Liability",
            "state" : "South Carolina",
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
             "number" : "(3 of 4)"
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


     popButton.addEventListener("click", BusinessInfoLoop, false);

    


    // Pop up button ends here


    var businessInfoLength = businessInfo.statesInsuranceInfo.length;

     
    function discountsLoop()
    {
    
        if (businessInfoLength > 0)
        {
            discountsInfo.innerHTML = '<p>' + " " + '</p>';
    
    
            for (i = 0; i < businessInfoLength; i++)
            {
                if (businessInfo.statesInsuranceInfo[i].lineofbusiness === "Worker's Compensation")
                {
                    discountsInfo.innerHTML += '<p style="color:#CB4154;">' + "Line of Business: " + businessInfo.statesInsuranceInfo[i].lineofbusiness + "<br/>" + "State: " + businessInfo.statesInsuranceInfo[i].state + "<br/>" + "Discount: " + businessInfo.statesInsuranceInfo[i].discount + '</p>';
                }
                else if (businessInfo.statesInsuranceInfo[i].lineofbusiness === "General Liability")
                {
                    discountsInfo.innerHTML += '<p style="background-color:goldenrod;">' + "Line of Business: " + businessInfo.statesInsuranceInfo[i].lineofbusiness + "<br/>" + "State: " + businessInfo.statesInsuranceInfo[i].state + "<br/>" + "Discount: " + businessInfo.statesInsuranceInfo[i].discount + '</p>';
                }
                else
                {
                    discountsInfo.innerHTML += '<p>' + "Line of Business: " + businessInfo.statesInsuranceInfo[i].lineofbusiness + "<br/>" + "State: " + businessInfo.statesInsuranceInfo[i].state + "<br/>" + "Discount: " + businessInfo.statesInsuranceInfo[i].discount + '</p>';
                }
            }
                
        }
    };
    
    
    
        function disappearInfo() 
        {
            discountsInfo.setAttribute("style", "display: none;");
        }
    
        function appearInfo()
        {
            discountsLoop();
            discountsInfo.setAttribute("style", "display: block;");
        }
    
        discountsParagraph.onmouseover = appearInfo;
        discountsParagraph.onmouseout = disappearInfo;
    
      


