const city = document.querySelector('#cities');
const boutton = document.querySelector("#bouton");
const temp = document.querySelector("#temp");
const villeDataList = document.querySelector('#ville');
const tableauTemperatures = [];
const tableauDates = [];
// async function fetchMeteo(ville) {
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=1ce64129da731d692308f766613a1037`;
//     const response = await fetch(url);
//     const weather = await response.json();
//     console.log(weather.main.temp - 273.15);
//     getMap(weather.coord.lat, weather.coord.lon);
//     console.log(weather.coord.lat);
//     console.log(weather.coord.lon);
//     temp.innerHTML = Math.round(weather.main.temp - 273.15);

//     const url5Jours = `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=1ce64129da731d692308f766613a1037`;
//     const response2 = await fetch(url5Jours);
//     const temp5Jours = await response2.json();
//     console.log(temp5Jours);
//     temp5Jours.list.forEach((index) => {
//         let heure = index.dt_txt.split(" ");
//         if (heure[1] === "12:00:00") {
//             tableauTemperatures.push(Math.round(index.main.temp - 273.15));
//             tableauDates.push(index.dt_txt);
//         }
//     });
//     getGraph(tableauDates, tableauTemperatures);
    
// }

// boutton.addEventListener('click', (event) => {
//     event.preventDefault();
//     fetchMeteo(city.value);
// })

//evenement faux
async function autoComplétion(ville)  {
    const urlAlgoliaPlaces = 'https://places-dsn.algolia.net/1/places/query';
    const response = await fetch(urlAlgoliaPlaces,{
        method: "POST",
        body: JSON.stringify({ query: event.currentTarget.value })
        });
    const villes = await response.json();
    villes.hits.forEach((v) => {
        console.log(v.locale_names.default);
        villeDataList.insertAdjacentHTML('beforeend','<option value='+v.locale_names.default+'>');
        // Affiche juste la ville sans l'arrondissment
    });
} 

city.addEventListener('keypress', (event) => {
    autoComplétion(event.currentTarget.value);

});
// autoComplétion
// const searchAlgoliaPlaces = (event) => {
//     fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//     })
//gsb afficher tous lesvisiteur