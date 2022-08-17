
console.log("hare Krishna from deposit");
document.getElementById('deposit').addEventListener('click', function(){


    // input amount start
    var amountBox = document.getElementById("depositAmount");
    const amount = parseFloat(amountBox.value);
    amountBox.value = '';
    // input amount end




    // current amount start
    var depositBox = document.getElementById("currentDipositAmount");
    var currentDepositValue = parseFloat(depositBox.innerText);
    currentDepositValue += amount;
    depositBox.innerText = currentDepositValue.toString();
    // current amount end

 

    



    // balance start
    var currentBox = document.getElementById("currentBalance");
    var currentBalance = parseFloat(currentBox.innerText);
    currentBalance+=amount; 
    currentBox.innerText = currentBalance.toString();
    // balance end
    
 
})