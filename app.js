const form = document.querySelector('form');
const cityName = document.querySelector('.cityName');
const degree = document.querySelector('.degree span');
const weatherCondition = document.querySelector('.weather-condition');
const time = document.querySelector('.time img');
const app = document.querySelector('.app');
const icon = document.querySelector('.icon img');



const updateCard = (data) => {
    
    const { cityDets, weather } = data;
    
    cityName.textContent = cityDets.EnglishName;
    degree.textContent = weather.Temperature.Metric.Value;
    weatherCondition.textContent = weather.WeatherText;
    
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
    
    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', `img/icons/${weather.WeatherIcon}.svg`);
    
    app.style.display = 'table';
    
}

const getInfo = async (city) => {
    
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets[0]);

    return { cityDets: cityDets[0] , weather };
    
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    localStorage.setItem('city', form.city.value.trim());

    if(form.city.value) {
        getInfo(form.city.value.trim())
            .then(data => updateCard(data));
            
            form.reset();
    }

});

if (localStorage.getItem('city')) {
    getInfo(localStorage.getItem('city'))
        .then(data => updateCard(data))
        .catch(err => console.log(err));
}
