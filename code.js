const form = document.querySelector('.search_form').addEventListener('submit', handleForm);
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
}