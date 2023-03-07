function updateTicker() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        const price = data.bpi.USD.rate_float.toFixed(2);
        const ticker = document.getElementById('ticker');
        ticker.innerText = `BTC/USD: ${price}`;
      })
      .catch(error => console.error(error));
  }

  setInterval(updateTicker, 60000);