function calculate() {
    const initialReading = parseFloat(document.getElementById('initialReading').value);
    const previousReading = parseFloat(document.getElementById('previousReading').value);
    const ratePerUnit = 23.40;
    const serviceCharge = 20.00;

    if (isNaN(initialReading) || isNaN(previousReading)) {
        document.getElementById('result').innerText = 'Error: Please enter valid readings';
        return;
    }

    const consumption = initialReading - previousReading;

    if (consumption < 0) {
        document.getElementById('result').innerText = 'Error: Initial reading must be greater than previous reading';
        return;
    }

    const cost = consumption * ratePerUnit;
    const additionalFee = cost * 0.01; // 1% of the cost
    const totalCost = cost + additionalFee + serviceCharge;

    document.getElementById('result').innerText = `Total Cost: GH₵ ${totalCost.toFixed(2)}`;
}