// storage

class Storage{
    constructor(){
        this.city;
        this.defaultCity = "London";
    }


    getLocationDataion(){
        if (localStorage.getItem('city') ===null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return { city: this.city}

    }


    setLocationData(city){
        // it is string
        localStorage.setItem('city', city);
    }
}