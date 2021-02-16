const city = document.querySelector('#inputCity');
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
        
        boutton.addEventListener('click', (event) => {
                event.preventDefault();
                fetchMeteo(city.value);
            })
            
            
            // Affiche juste la ville sans l'arrondissment STRIP
            // click sur la bonne option et afficher la value
            async function autoComplétion(ville)  {
                const urlAlgoliaPlaces = 'https://places-dsn.algolia.net/1/places/query';
                const response = await fetch(urlAlgoliaPlaces,{
                    method: "POST",
                    body: JSON.stringify({ query: ville})
                });
                const villes = await response.json();
                //vider la dataListOption a chaque touche tapper
                villeDataList.innerHTML = '';
                villes.hits.forEach((v) => {
                    villeDataList.insertAdjacentHTML('beforeend',`<option value="${v.locale_names.default}">`);
                                       
                });
            } 
            
//Evenement keypress qui affiche les nom de ville pour l'autocompletion
city.addEventListener('keypress', (event) => {
    autoComplétion(event.currentTarget.value);
});
//Evenement qui affiche le nom de la ville dans la console
city.addEventListener('change',(event) => {
    console.log(city.value);
});


// Evenement dataList pour le click
// autoComplétion
// const searchAlgoliaPlaces = (event) => {
//     fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//     })
//gsb afficher tous lesvisiteur