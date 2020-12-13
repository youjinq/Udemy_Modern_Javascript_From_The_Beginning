// tu   rn on plugin to access API

class Weather{
    constructor(city){
        this.apiKey = "UR_API_KEY";
        this.city = city;

    }

    // fetch weather from API-part 1
    async getWeather(){

        // this api does not have a access-control-allow-origin
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    // change weather location
    changeLocation(city){
        this.city = city;
        console.log(this.city);
    }
}