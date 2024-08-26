// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function(event) {
    event.preventDefault();

    list = document.getElementById("faultyItems");
    list.style.visibilty = "hidden";
    list.addEventListener("submit", function(event){
       
        let pilot = document.getElementById("input[name=pilotName]").value;
        let copilot = document.getElementById("input[name=copilotName]").value;
        let fuelLevel = document.getElementById("input[name=fuelLevel]").value;
        let cargoLevel = document.getElementById("input[name=cargoMass]").value;
        
        

        formSubmission(window.document,list,pilot,copilot,fuelLevel,cargoLevel);
        event.preventDefault();
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

    })
    
 });