async function tellWeather(){
    try{    let city = document.getElementById('cityInput').value;
        if(city === '' || undefined || null) {
            window.alert('Please type a city name')
        }
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e3be35a1576ecc27e0fdbf65c71f0e30`);
        let data = await response.json();
        let icon  = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
        let cityName = data.name;
        let date = new Date(data.dt * 1000)
        date = date.toLocaleString();
        let weather = data.weather[0].main;
        let temp = data.main.temp;
        let feelsLike = data.main.feels_like;
        document.getElementById('city').innerHTML = `Location: ${cityName}`;
        document.getElementById('date').innerHTML = `Date: ${date}`;
        document.getElementById('icon').src = icon; 
        document.getElementById('temp').innerText = `${temp}° |`;
        document.getElementById('feels').innerText = `Feels Like: ${feelsLike}°`;
        document.getElementById('weatherType').innerText = weather;
        document.getElementById('weatherContainer').setAttribute('class', 'weatherContainer')
        document.getElementById('cityInput').value = '';
    } catch (error) {
        window.alert('Something went wrong! Please check the spelling of the city name')
    }
}

let vw = `${window.innerWidth}px`;
let vh = `${window.innerHeight}px`;

document.body.style.backgroundSize = `${vw} ${vh}`;

let input = document.getElementById('cityInput');
input.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        tellWeather();
    }
})