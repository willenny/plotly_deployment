// 12.3.2

// print all the data from samples.json
d3.json("samples.json").then(function(data){
    console.log(data);
});

// sort the wfreq array in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// delete null values from the sorted wfreq array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });

// 12.3.2 SKILL DRILL
// Use Object.entries() and forEach() to print all the metadata 
// of the first person in the samples.json() dataset (ID 940).
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});