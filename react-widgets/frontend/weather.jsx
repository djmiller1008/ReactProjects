import React from 'react';

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            response: ""
        }
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.getWeather);

    }

    getWeather(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const xmlhttp = new XMLHttpRequest();
        const key = '7310c3764aca96ce3528446a2899d361';
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        

        xmlhttp.onload = () => {
            if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
                let response = JSON.parse(xmlhttp.responseText);
                this.setState({ response: response });
                
            } else {
                console.log('error');
            }
        }

        xmlhttp.open('GET', `${url}`, true);
        xmlhttp.send();

    }

    render() {
        let content = <div></div>;

        if (this.state.response) {
            const weather = this.state.response;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;
            content = <div className="weather-content">
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} degrees</p>
            </div>;
        } else {
            content = <div className="loading">loading weather...</div>
        }
        
        
        
        return (
            <div className="weather-box">
                <h1>Weather</h1>
                <div className="weather">
                    {content}
                </div>
                
            </div>
        )
    }
    
}

export default Weather;