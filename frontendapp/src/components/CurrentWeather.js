
export function CurrentWeather(props){
    console.log( 'CurrentWeather ', props.weatherinfo.name );
    return(
        <>
            <h3>Current Weather Info :</h3>
            <div>Loc Name: {props.weatherinfo.name} </div>
            <div>Region: {props.weatherinfo.region} </div>
                <div>country: {props.weatherinfo.country} </div>
                <div> Latitude, Longitude : {props.weatherinfo.lat} , {props.weatherinfo.lon} </div>
                <div> timezone : {props.weatherinfo.tz_id} </div>
                <div>
                    localtime_epoch:  {props.weatherinfo.localtime_epoch}, 
                    localtime: {props.weatherinfo.localtime} </div>
                <div>
                {/* <p>Last Updated: {results.current.last_updated}</p>
                <p>Temperature in Celcius: {results.current.temp_c}</p> */}
                </div>
        </>
    )
}
