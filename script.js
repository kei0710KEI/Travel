// 天気情報を取得する関数
function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'YOUR_API_KEY'; // OpenWeatherMapのAPIキーを使用
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=ja`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = `
          <p>都市: ${data.name}</p>
          <p>天気: ${data.weather[0].description}</p>
          <p>気温: ${data.main.temp}°C</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
      })
      .catch(error => {
        document.getElementById('weather-info').innerHTML = '<p>天気情報を取得できませんでした。</p>';
      });
  }
  
  // 通貨換算を行う関数
  function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const apiKey = 'YOUR_API_KEY'; // 通貨換算APIのAPIキーを使用
    const url = `https://api.exchangerate-api.com/v4/latest/USD`; // 基本通貨はUSD
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates.JPY; // JPY（日本円）に換算
        const result = amount * exchangeRate;
        document.getElementById('currency-result').innerHTML = `${amount} USD = ${result.toFixed(2)} JPY`;
      })
      .catch(error => {
        document.getElementById('currency-result').innerHTML = '通貨換算に失敗しました。';
      });
  }
  

