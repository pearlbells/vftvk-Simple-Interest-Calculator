function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var curYear = new Date().getFullYear();
    var finalYear = parseInt(curYear) + parseInt(years);

    if( (principal =='') || (principal == 0)) {
        alert('Please enter a valid amount.');
        document.getElementById("principal").focus();
        return false;
    }
    var amount = parseFloat((principal*rate*years)/100).toFixed(2);
    document.getElementById('result').innerHTML= 'If you deposit <mark>'+principal+',</mark><br>'+
    'at an interest rate of <mark>'+rate+'%.</mark><br>'+
    'You will receive an amount of <mark>'+amount+',</mark><br>'+
    'in the year <mark>'+finalYear+'</mark><br>';
}
        