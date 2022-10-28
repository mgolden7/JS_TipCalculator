const billAmount = document.getElementById('amount');
const guests = document.getElementById('guests');
const tipP = document.getElementById('tip');


function calculate() {
    var splitBill = billAmount.value / guests.value;
    var tipAmount = Math.round((tipP.value - 1) * 100);
    var total = splitBill*tipP.value;

    document.getElementById('billTotal').innerHTML = billAmount.value;
    document.getElementById('payingGuests').innerHTML = guests.value;
    document.getElementById('splitBill1').innerHTML = splitBill;
    document.getElementById('splitBill2').innerHTML = splitBill;
    document.getElementById('tipPercentage').innerHTML = tipAmount;
    document.getElementById('total').innerHTML = total;
    
    /*console.log(billAmount.value);
    console.log(guests.value);
    console.log(tipP.value);
    console.log(splitBill);
    console.log(tipAmount);
    console.log(total);*/
}

