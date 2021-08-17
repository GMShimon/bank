//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    
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
    //clear the deposit input-field
    depositInput.value = '';
})

//handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click',function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat( withdrawInput.value);
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

    //clear the deposit input-field
    withdrawInput.value = '';
})