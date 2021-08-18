function getInputValue(idInput){
    const Input = document.getElementById(idInput);
    const Amount = parseFloat(Input.value);
    //clear the deposit input-field
    Input.value = '';
    return Amount;
}
//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    
    const depositTotal = document.getElementById('depositAmn');
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    //update the deposit total
    const newDepositAmount = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositAmount;
    //update the balance
    const balance = document.getElementById('balanceAmn');
    const balanceText = balance.innerText;

    const balanceAmount = parseFloat(balanceText);
    const newBalanceTotal = balanceAmount + parseFloat(depositAmount);
    balance.innerText = newBalanceTotal;
    
})

//handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click',function() {
    
    const withdrawAmount = getInputValue('withdraw-input');

    const withdrawTotal = document.getElementById('withdrawAmn');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);

    //update the withdraw
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;

    //update the balanceAmount
    const balance2 = document.getElementById('balanceAmn');
    const balanceText2 = balance2.innerText;
    const balanceAmount2 = parseFloat(balanceText2);
    const newBalanceTotal2 = balanceAmount2 - withdrawAmount;
    balance2.innerText = newBalanceTotal2;
})