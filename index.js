const apikey="6cd81e2d5c289b2ba5ccdec0505b5915";

async function fetchdata(location){
const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apikey}`, {mode: 'cors'});
const data=await response.json()
statusfunc(data);
iconfunc(data);
showtempfunc(data)
}
const form =document.querySelector('form')
const search=document.querySelector("input")
const button=document.querySelector('button')
button.addEventListener('click',()=>{
    fetchdata(search.value);
})
const temperature=document.querySelector('.temperature')
const icon=document.querySelector('.icon')
const statusx=document.querySelector('.status')

function showtempfunc(data){
    const ktoc=(data.main.temp-273.15).toFixed(2);
    temperature.innerHTML=`<h1>${ktoc}</h1>`;
}
function iconfunc(data){
    icon.innerHTML=`<img src="http://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>`
}
function statusfunc(data){
    statusx.innerHTML=`<small>${data.weather[0].main}</small>`;
    
}