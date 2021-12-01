function compute()
{
    //p->principal ,r->interest rate, y->years
    var p = document.getElementById("principal").value;
    if(p<=0) {
        alert("Enter positive number");
        window.focus();
        return false;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var amount=p * y * r/100;
    var year = new Date().getFullYear()+parseInt(y);
    document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

        