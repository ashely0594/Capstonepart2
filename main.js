

const settings = {
    "async": true,
    "scrossDomain" : true,
    "url": ""
}

const URL = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=1Oznzuw13jiOemUwSuZbEzHC66sY8Ley"

const response = await fetch(URL);
        const data = await response.json(); 
        console.log(data);
        
let button = document.querySelector(".btn");
button.addEventListener("click", pleaseWork()); 

async function pleaseWork() { 
    try { 
        const response = await fetch(URL);
        const data = await response.json(); 
        console.log(data); 
    } catch (e) { 
        console.log(e); 
    }
}
