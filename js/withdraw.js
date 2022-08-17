
console.log("hare Krishna from withdraw");
document.getElementById('withdraw').addEventListener('click', function(){ 

    // input amount start
    var amountBox = document.getElementById("withdrawAmount");
    const amount = parseFloat(amountBox.value);
    amountBox.value = '';
    // input amount end




    // current amount start
    var withdrawBox = document.getElementById("currentWithdrawAmount");
    var currentWithdrawValue = parseFloat(withdrawBox.innerText);
    currentWithdrawValue += amount;
    withdrawBox.innerText = currentWithdrawValue.toString();
    // current amount end

 

    
    


    // balance start
    var currentBox = document.getElementById("currentBalance");
    var currentBalance = parseFloat(currentBox.innerText);
    // check whether the withdral value is exist in balance or not start
    if(amount > currentBalance)
    {
        alert("Insufficient balance.");
        return;
    }
    currentBalance-=amount; 
    currentBox.innerText = currentBalance.toString();
    // balance end
    
 
})