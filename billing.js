/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction()
{
    var shipping_name = document.getElementById("shippingName").value;
    var shipping_zip = document.getElementById("shippingZip").value;

    if(document.getElementById("same").checked)
    {
        document.getElementById("billingName").value = shipping_name;
        document.getElementById("billingZip").value = shipping_zip;   
    }
    else
    {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }

}