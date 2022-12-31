// the URL to the SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json() method places a call to SpaceX's API, 
// retrieves the data, and prints it to the browser console
d3.json(url).then(receivedData => console.log(receivedData));

// retrieve the full_name of the Vandenberg Air Force Base (index 0)
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// 12.3.1 SKILL DRILL
// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
d3.json(url).then(lats => console.log(lats.map(city => city.location.latitude)));

d3.json(url).then(lats => console.log(lats.map(city => city.location.longitude)));
