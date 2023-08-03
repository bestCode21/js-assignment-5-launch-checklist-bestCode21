// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch(); // Call myFetch to get planetary data
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       // Pick a random planet from the list and add its information to the destination
       const planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

   })

   // formSubmission function to handle form submission
   document.getElementById("launchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const pilotNameInput = document.querySelector('input[name="pilotName"]').value;
    const copilotNameInput = document.querySelector('input[name="copilotName"]').value;
    const fuelLevelInput = document.querySelector('input[name="fuelLevel"]').value;
    const cargoMassInput = document.querySelector('input[name="cargoMass"]').value;

    formSubmission(document, document.getElementById("faultyItems").getElementsByTagName("li"), pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
});
   
});