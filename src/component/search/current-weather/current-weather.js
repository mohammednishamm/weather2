import './current-weather.css'
const CurrentWeather =({data})=>{

    function formatDate(date) {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      }



      const timestamp = data.sys.sunset * 1000;

      // Create a new Date object with the timestamp
      const sunsetDate = new Date(timestamp);
      
      // Get the parts of the date (hours, minutes, seconds)
      const hours = sunsetDate.getHours();
      const minutes = sunsetDate.getMinutes();
      const seconds = sunsetDate.getSeconds();
      
      // Format the parts into a readable string
      const formattedSunsetTime = `${hours}:${minutes}:${seconds}`;  
    return (
        <>
        {/* <div className='weather'>
            <div className='top'>
                <div>
                <p className='city'>{data.city}</p>
                <p className='weather-disription'>{data.weather[0].description}</p>
            </div>
            <img className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className='bottom'>
                <p className='temprature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label top'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like </span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°c</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div  className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div> */}


        <div  style={{ backgroundColor: "#fee1b7"   }}  class=' w-[99%] md:w-[40%] flex flex-col gap-3 items-center justify-center h-[300px] rounded-3xl '>    
            <span class="text-2xl font-bold" style={{color:"#fca278"}}>Today</span>
    <div class='display flex justify-center  items-center gap-5 '>
    <img class='h-[80px]' src={`icons/${data.weather[0].icon}.png`}/>
   
    <p style={{color:"#fca278"}} class='text-7xl'>{Math.round(data.main.temp)}°C</p>


            </div>
    <p style={{color:"#fca278"}} class='text-5 font-semibold'>{data.weather[0].description}</p>
    <p style={{color:"#fca278"}} class='text-8 '>{data.city}</p>
    <p style={{color:"#fca278"}} class='text-8'>{formatDate(new Date())}</p>

    <div class='display flex items-center gap-3 '>
                        <span style={{color:"#fca278"}} className='pl'>Feels like </span>
                        <span style={{color:"#fca278"}} className='text-2'>{Math.round(data.main.feels_like)}°c</span>
                        <span style={{color:"#fca278"}}>|</span>
                        <span style={{color:"#fca278"}} className='pl'>Sunset </span>
                        <span style={{color:"#fca278"}} className='text-2'>{formattedSunsetTime}</span>
                    </div>

    </div>

        </>

    );
}
export default CurrentWeather