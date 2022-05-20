const form = document.querySelector('.search_form').addEventListener('submit', handleForm);
const container = document.querySelector('.containerWeather')
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const URL = 'https://api.weatherapi.com/v1/forecast.json?key=3aae5333271e4a94bdf233013221805&days=3&q=';



function handleForm(event){
  event.preventDefault()
  let city = document.querySelector('.search_city');
  getAPI(city.value);
  city.value = '';
  
}


async function getAPI(city){
  const request = await fetch(`${URL}${city}`);
  const json = await request.json();
  console.log(json);
  showData(json);
}

const showData = (data) =>{
  const day1 = new Date(data.forecast.forecastday[0].date);
  const day2 = new Date(data.forecast.forecastday[1].date);
  const day3 = new Date(data.forecast.forecastday[2].date);
  container.innerHTML += `
 

  <div class="content">
  <div class="head">
      <div class="city">
          <p>${data.location.name}</p>
          <p>${data.location.country}</p>
          <p>Now</p>
      </div>
      <div class="temp">
          <picture>
              <span class="material-symbols-outlined">
                  partly_cloudy_day
              </span>
          </picture>
          <div class="temp_data">
              <div class="degs">
                  <p>${data.current.temp_c}°</p>
                  <p>/${data.current.temp_f}°</p>
              </div>
              <div class="temp_description">
                  <p>${data.current.condition.text}</p>
              </div>
          </div>
      </div>
      <div class="today">
          <div class="breath">
              <span class="material-symbols-outlined">
                  water_drop
              </span>
              <p>${data.current.precip_mm}mm</p>
              <p>Precip</p>
          </div>
          <div class="rain">
              <span class="material-symbols-outlined">
                  air
              </span>
              <p>${data.current.wind_kph}Km/h</p>
              <p>Wind</p>
          </div>
          <div class="humidity">
              <span class="material-symbols-outlined">
                  water
                  </span>
              <p>${data.current.humidity}%</p>
              <p>humidity</p>
          </div>
      </div>
  </div>
  <div class="days">
      <div class="day">
          <p>${days[day1.getDay()]}</p>
          <div class="day_temp">
              <span class="material-symbols-outlined">
                  cloudy
                  </span>
              <p>${data.forecast.forecastday[0].day.condition.text}</p>
          </div>
          <div class="day_degs">
              <span>${data.forecast.forecastday[0].day.maxtemp_c}°</span>
              <span>${data.forecast.forecastday[0].day.mintemp_c}°</span>
          </div>
          
      </div>
      <div class="day">
          <p>${days[day2.getDay()]}</p>
          <div class="day_temp">
              <span class="material-symbols-outlined">
                  ac_unit
                  </span>
              <p>${data.forecast.forecastday[1].day.condition.text}</p>
          </div>
          <div class="day_degs">
              <span>${data.forecast.forecastday[1].day.maxtemp_c}°</span>
              <span>${data.forecast.forecastday[1].day.mintemp_c}°</span>
          </div>
          
      </div>
      <div class="day">
          <p>${days[day2.getDay()]}</p>
          <div class="day_temp">
              <span class="material-symbols-outlined">
                  thunderstorm
                  </span>
              <p>${data.forecast.forecastday[2].day.condition.text}</p>
          </div>
          <div class="day_degs">
              <span>${data.forecast.forecastday[2].day.maxtemp_c}°</span>
              <span>${data.forecast.forecastday[2].day.mintemp_c}°</span>
          </div> 
        </div>
    </div>
</div>
  `;

}