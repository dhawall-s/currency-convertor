document.getElementById('convert-btn').addEventListener('click', function () {
    
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const exchangeRates = {
        USD: { EUR: 0.85, JPY: 110.0, GBP: 0.72, AUD: 1.32, CAD: 1.27, SGD: 1.34, HKD: 7.77, CHF: 0.91, INR: 73.0 },
        EUR: { USD: 1.18, JPY: 130.0, GBP: 0.85, AUD: 1.56, CAD: 1.50, SGD: 1.58, HKD: 9.17, CHF: 1.07, INR: 86.0 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0097, AUD: 0.012, CAD: 0.011, SGD: 0.012, HKD: 0.071, CHF: 0.0082, INR: 0.68 },
        GBP: { USD: 1.38, EUR: 1.18, JPY: 103.0, AUD: 1.83, CAD: 1.77, SGD: 1.87, HKD: 10.85, CHF: 1.27, INR: 101.0 },
        AUD: { USD: 0.76, EUR: 0.64, JPY: 80.0, GBP: 0.55, CAD: 0.97, SGD: 1.02, HKD: 5.91, CHF: 0.69, INR: 53.0 },
        CAD: { USD: 0.79, EUR: 0.67, JPY: 86.0, GBP: 0.57, AUD: 1.03, SGD: 1.08, HKD: 6.28, CHF: 0.73, INR: 58.0 },
        SGD: { USD: 0.74, EUR: 0.63, JPY: 81.0, GBP: 0.54, AUD: 0.98, CAD: 0.93, HKD: 5.80, CHF: 0.68, INR: 52.0 },
        HKD: { USD: 0.13, EUR: 0.11, JPY: 14.0, GBP: 0.092, AUD: 0.17, CAD: 0.16, SGD: 0.17, CHF: 0.12, INR: 9.28 },
        CHF: { USD: 1.10, EUR: 0.93, JPY: 121.0, GBP: 0.79, AUD: 1.45, CAD: 1.39, SGD: 1.46, HKD: 8.27, INR: 85.0 },
        INR: { USD: 0.014, EUR: 0.012, JPY: 1.47, GBP: 0.010, AUD: 0.019, CAD: 0.017, SGD: 0.019, HKD: 0.11, CHF: 0.012 }
    };


    if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = "Cannot convert the same currency.";
    } else if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').textContent = "Invalid conversion.";
    }
});
