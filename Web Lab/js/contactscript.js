var emailCheckBox = document.getElementById("emailcontact");
var phoneCheckBox = document.getElementById("phonecontact");
var formSubmitButton = document.getElementById("submitbutton");
var submitForm = document.getElementById("contactform");



function checkOne()
{
    var name = document.getElementById("firstn");

    if (emailCheckBox.checked && phoneCheckBox.checked)
    {
        alert("Please check one- email or phone");
    }
    else if (emailCheckBox.checked)
    {
        alert('Thank you for your feedback, ' + name.value + '. Someone will contact you shortly by email.');
        return false;

    }

    else if (phoneCheckBox.checked)
    {
        alert('Thank you for your feedback, ' + name.value + '. Someone will contact you shortly by phone.');
        return false;
    }

    else
    {
        alert("Please check one- email or phone");
    }

    return false;

}




submitForm.onsubmit = checkOne;
