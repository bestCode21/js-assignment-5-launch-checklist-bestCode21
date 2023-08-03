// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML =`
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}" alt="Mission Destination Image">
        `;              
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list[0].innerHTML = `Pilot ${pilot} is ready for launch`;
    list[1].innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list[2].innerHTML = (validateInput(fuelLevel) === 'Is a Number') ? "Fuel level high enough for launch" : "Fuel level is not a valid number";
    list[3].innerHTML = (validateInput(cargoLevel) === 'Is a Number') ? "Cargo mass low enough for launch" : "Cargo mass is not a valid number";

    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

    if (
        pilot !== "" &&
        copilot !== "" &&
        validateInput(fuelLevel) === "Is a Number" &&
        validateInput(cargoLevel) === "Is a Number"
    ) {
        if (Number(fuelLevel) < 10000) {
            list[2].innerHTML = "Fuel level too low for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#C7254E";
        } else if (Number(cargoLevel) > 10000) {
            list[3].innerHTML = "Cargo mass too high for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#C7254E";
        } else {
            faultyItems.style.visibility = "hidden";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#419F6A";
        }
    } else {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();

    });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
