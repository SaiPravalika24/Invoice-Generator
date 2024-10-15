function calculateTotal() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const covidCharge = parseFloat(document.getElementById('covidCharge').value) || 0;
    const fuelCharge = parseFloat(document.getElementById('fuelCharge').value) || 0;

    const grandTotal = amount + covidCharge + fuelCharge;

    document.getElementById('grandTotal').value = grandTotal.toFixed(2);
}