
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const result = document.getElementById("result");
const rateText = document.getElementById("rate");
const message = document.getElementById("message");

document.getElementById("convert").addEventListener("click", convertCurrency);

async function convertCurrency() {
    const amount = Number(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    message.textContent = "";
    rateText.textContent = "";

    if (amountInput.value.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        result.textContent = "Enter a valid amount";
        return;
    }

    result.textContent = "Converting...";

    try {
        const response = await fetch(
            `https://open.er-api.com/v6/latest/${from}`
        );

        if (!response.ok) {
            throw new Error("Could not fetch exchange rates.");
        }

        const data = await response.json();

        if (data.result !== "success" || !data.rates[to]) {
            throw new Error("Exchange rate unavailable.");
        }

        const exchangeRate = data.rates[to];
        const convertedAmount = amount * exchangeRate;

        result.textContent =
            `${convertedAmount.toLocaleString(undefined, {
                maximumFractionDigits: 2
            })} ${to}`;

        rateText.textContent =
            `1 ${from} = ${exchangeRate} ${to}`;

        message.textContent =
            `Rate date: ${data.time_last_update_utc}`;

    } catch (error) {
        result.textContent = "Conversion failed";
        message.textContent =
            "Check your internet connection and try again.";
    }
}
