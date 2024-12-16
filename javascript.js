const apiKey="74cfa96496ad8957344abdabd1425727 ";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=matric&q=Dhaka";
async function checkweather() {
    const response =await fetch(apiUrl + `&appid =${apiKey}`);
    var data=awit response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;
    
}
checkweather();