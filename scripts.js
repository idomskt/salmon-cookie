var pioneerSquare = {
    id: "pioneerSquare",
    name: "Pioneer Square",
    min: 17,
    max: 88,
    ave: 5.2,
    openTime: ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"],
    total: 0
};

var portlandAirport = {
    id: "portlandAirport",
    name: "Portland Airport",
    min: 6,
    max: 24,
    ave: 1.2,
    openTime: ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"],
    total: 0
};


function cookiesPerHour() {

    var allLocations = [pioneerSquare, portlandAirport];

    for(var storeIndex = 0; storeIndex < allLocations.length; storeIndex++) {

        var printStoreName = document.getElementById(allLocations[storeIndex].id + 'Title');
        printStoreName.innerHTML += allLocations[storeIndex].name;

        for(var hoursIndex = 0; hoursIndex < allLocations[storeIndex].openTime.length; hoursIndex++) {
            // Generate Random Number
            function randomNumCustomers() {
                return Math.floor(Math.random() * (allLocations[storeIndex].max - allLocations[storeIndex].min + 1)) + allLocations[storeIndex].min;
            };
            var holdFuncValue = randomNumCustomers();
            var printToScreen = document.getElementById(allLocations[storeIndex].id + '-ul');
            printToScreen.innerHTML += '<li>' + allLocations[storeIndex].openTime[hoursIndex] + ': ' + holdFuncValue + ' Cookies</li>';
            allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
        }

    }

}



cookiesPerHour();
















// var storeLocations = [pioneerSquare];


// function calcHourCost(storeName) {

//     for(var store = 0; store < storeLocations.length; store++) {

//         var printStoreName = document.getElementById(storeName.id + 'Title');
//         printStoreName.innerHTML+=storeName.name;
        
//         for(var i = 0; i < storeName.openTime.length; i++) {
//             var printHours = document.getElementById(storeName.id + '-ul');
//             printHours.innerHTML+='<li>' + storeName.openTime[i] + ': ' + storeName.randomNumCustomers() + ' Cookies</li>';
//         }
//     }

// }

// calcHourCost(pioneerSquare);
