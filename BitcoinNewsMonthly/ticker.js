const ticker = document.getElementById('ticker');

function updateTicker() {
  // Retrieve the current Bitcoin price from a Bitcoin API
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
      // Extract the current Bitcoin price in USD
      const price = data.bpi.USD.rate_float.toFixed(2);

      // Create a new ticker item with the current Bitcoin price and timestamp
      const item = document.createElement('div');
      item.innerHTML = `Bitcoin Price: $${price} (as of ${new Date().toLocaleTimeString()})`;

      // Add the new ticker item to the top of the ticker container
      ticker.insertBefore(item, ticker.firstChild);
    })
    .catch(error => console.error(error));
}

// Update the ticker every minute
setInterval(updateTicker, 60000);

// Update the ticker on page load
updateTicker();
