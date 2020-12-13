// part-2

class UI{
    constructor(){
        this.loc = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike= document.getElementById("w-feels-like");
        this.visibility = document.getElementById('w-visibility');
        this.wind = document.getElementById('w-wind');

    }
// set value for property
    paint(weather){
        console.log(weather.name);
        this.loc.textContent= weather.name; 
        this.desc.textContent =weather.weather[0].main;
        this.humidity.textContent = `Relative Huidity: ${weather.main.humidity} %`;
        this.string.textContent =`${(weather.main.temp -273.15).toFixed(2)} C (${((weather.main.temp -273.15)*9/5 +32).toFixed(2)} F) `;
        // // set icon
        this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.feelslike.textContent = `Feels like : ${weather.weather[0].description}`;
        this.visibility.textContent = `Visibility: ${weather.visibility}`;

        this.wind.textContent =`Wind speed : ${weather.wind.speed} m/s `;

    }
}

