const key = 'UjMP70FP6eYgetmkTGnm8PYuPJujMfBt';

const getWeather = async (cityKey) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query =  `${cityKey.Key}?apikey=${key}`;
    
    const respose = await fetch(base + query);
    const data = await respose.json();
    
    return data[0];
}

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const respose = await fetch(base + query);
    const data = respose.json();

    return data;
}