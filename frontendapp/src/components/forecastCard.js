import React from "react";


export function ForeCastCard(props){
        console.log('just received');
        console.log(props);

        return(
            <>
                <div style={{ margin:'10px', padding: '10px', border:'1px solid #3e3e3e'}}>
                    <div>Sunrise : {props.forecast.date} </div>
                    <div>SunSet : {props.forecast.astro.sunset} </div>
                    <div>Moonrise : {props.forecast.astro.moonrise} </div>
                    <div>Moonset : {props.forecast.astro.moonset} </div>
                    <div>Moonrise : {props.forecast.astro.moon_phase} </div>
                    <div>Moon Illumination : 
                        {props.forecast.astro.moon_illumination}</div>
                </div>
            </>
        )
    }