// initialize

const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationDataion();

// init weather object

const weather = new Weather(weatherLocation.city);

// ini UI object

const ui = new UI();


// get weather on DOM load

document.addEventListener('DOMContentLoaded',getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;
    
  // set location to LS
   storage.setLocationData(city);

    weather.changeLocation(city);
    // get weather and display again
    getWeather();

    // close modal
    $("#locModal").modal('hide');


})

// weather.changeLocation('Miami')

function getWeather(){
    weather.getWeather()
      .then(results => {
        ui.paint(results);
      })
      .catch(err => console.log(err));
  }
