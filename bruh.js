const executeButton = document.querySelector(".executeButton");
const planetCounter = document.getElementById("planetCounter");
const planetName = document.querySelector(".planetName");
const planetFuneral = document.querySelector(".planetFuneral");
/*const planetOrbit = document.querySelector(".orbit");
const planetPopulation = document.querySelector(".population");*/
const newPlanet = document.querySelector(".refresh");

let counter = 0;
executeButton.addEventListener("click", () => {
    planetCounter.innerHTML = ++counter;
})


newPlanet.addEventListener("click", async () => {
    let name = await fetch("http://swapi.dev/api/planets/1/")
    let data = await name.json()
    console.log(data)
        planetFuneral.innerHTML = `
        <div>
            <h3>Name: ${data.name}</h3>
            <h3>Orbital Period: ${data.orbital_period}</h3>
            <h3>Population: ${data.population}</h3>
        </div>
     `
})

window.addEventListener("hashchange", () => {
    selectPlanet()
})

const state = {
    planets: [],
}

function selectPlanet(){
    getEventFromHash()
    renderPlanetDetails()
}

function getEventFromHash(){
    const name = window.location.hash.slice(1)
    const singlePlanet = state.planets.find((star) =>{
        return star.name === name
    })
    state.singlePlanets = singlePlanet
    console.log(state)
}

function renderPlanetDetails(){
    if(state.singlePlanets){
        getSingleStar()
    }
}

async function getSinglePlanet(){
    const planetData = await fetch(`http://swapi.dev/api/planets/1/${state.singlePlanet.name}`)
    const singleStarData = await stardata.json()
    state.singlePlanet = singleStarData;
    console.log(star)
    const population = star.singlePlanet.population.map((ability) => {
        console.log(population)
        return `<p> ${population}</p>`
    })

    planetFuneral.innerHTML = `<h3>${state.singlePlanet.name}</h3>`
}




