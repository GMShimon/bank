//get the input value from both deposit and withdraw inputsField
function getInputValue(idInput){
    const Input = document.getElementById(idInput);
    const Amount = parseFloat(Input.value);
    //clear the deposit input-field
    Input.value = '';
    return Amount;
}
//update the deposit and withdraw amount
function updateBalance(previousAmount,Amount,total){
    const newDepositAmount = previousAmount + Amount;
    total.innerText = newDepositAmount;
}
//update the bankBalance
function updateMainBalance(Amount,isAdd){
    const balance = document.getElementById('balanceAmn');
    const balanceText = balance.innerText;

    const balanceAmount = parseFloat(balanceText);
    if(isAdd == true){
        const newBalanceTotal = balanceAmount + parseFloat(Amount);
        balance.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = balanceAmount - parseFloat(Amount);
        balance.innerText = newBalanceTotal;
    }
}

//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');//function call
    
    const depositTotal = document.getElementById('depositAmn');
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    //update the deposit total
    updateBalance(previousDepositAmount,depositAmount,depositTotal);
    
    //update the balance
    updateMainBalance(depositAmount,true);
})

//handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click',function() {
    
    const withdrawAmount = getInputValue('withdraw-input');//function call

    const withdrawTotal = document.getElementById('withdrawAmn');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);

    //update the withdraw
    updateBalance(previousWithdrawAmount,withdrawAmount,withdrawTotal);
    
    //update the balance
    updateMainBalance(withdrawAmount,false);
})