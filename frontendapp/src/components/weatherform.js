import React from "react";
import { ForeCastCard } from './forecastCard';
import { CurrentWeather } from './CurrentWeather';

export default function WeatherForm(){
    const apiBaseUrl = 'http://localhost:4000/weather/';
    let api = '';

    const [formData, setFormData ] = React.useState({
        "apiname":"forecast",
        "q":"chennai",
        "days":3,
    })

    // console.log(formData.apiname, formData.q, formData.days);

    const [results, setResults ] = React.useState({
        current : [],
        location : [],
        forecast : [],
        dataLoaded : false
    });

    function handleChange(event){
        const {name, value} = event.target;
            setFormData(preFormData => {

                return {
                    ...preFormData,
                    [name] : value
                }
            })
    }

    function handleSubmit(event){
        event.preventDefault();

        api = apiBaseUrl + '' + formData.apiname + '?q=' + formData.q ;
        api += '&days=' + formData.days;

        console.log('handleSubmit : -------> API : ', api)
        console.log('handleSubmit : name , value :----->', formData.apiname, formData.q, formData.days);

        fetch(api)
         .then((resp) => resp.json())
         .then((data) => setResults( data ));

        console.log('RESULTS ------------->')
        console.log(results);
        console.log('FORECAST ARR ------>');
        console.log(results.forecast);
        
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="apiname">API Choice:
                
                <select 
                    id="apiname" 
                    value={formData.apiname}
                    onChange={handleChange}
                    name="apiname"
                >
                    <option value="current">Current Weather</option>
                    <option value="forecast">Forcast Weather</option>
                </select>
            </label>
            {formData.apiname === 'forecast' ? 
            <label>Days
                <input type="number" placeholder="Days ?"
                    onChange={handleChange}
                    name="days"
                    value={formData.days}
                />
            </label> : ''}
            <label>
                <input type="text" placeholder="Location ?"
                    onChange={handleChange}
                    name="q"
                    value={formData.q}
                />
            </label>
            <button type="submit">Weather Info</button>
        </form>


        <div>
            <CurrentWeather weatherinfo={results.location} />
            <div>
                <p>Last Updated: {results.current.last_updated}</p>
                <p>Temperature in Celcius: {results.current.temp_c}</p>
            </div>
            
            { formData.apiname === 'forecast' && results.forecast.forecastday ?    
                <> 
                    <h3>Forecast info</h3> 
                    <div style={{ display: 'flex', flexDirection: 'row', flexBasis: 'auto',   justifyContent: 'center'
 }}>
                        {results.forecast.forecastday.map((forecast) => (
                        <>
                        <ForeCastCard forecast={forecast} />
                        </> 
                        ))}
                    </div>
                </> : ''
                }
        </div>
    </div>
    )
}