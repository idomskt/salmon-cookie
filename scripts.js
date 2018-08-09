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

var washingtonSquare = {
    id: "washingtonSquare",
    name: "Washington Square",
    min: 11,
    max: 38,
    ave: 1.9,
    openTime: ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"],
    total: 0
};

var sellwood = {
    id: "sellwood",
    name: "Sellwood",
    min: 20,
    max: 48,
    ave: 3.3,
    openTime: ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"],
    total: 0
};

var pearlDistrict = {
    id: "pearlDistrict",
    name: "Pearl District",
    min: 3,
    max: 24,
    ave: 2.6,
    openTime: ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"],
    total: 0
};


// function cookiesPerHour() {

//     var allLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

//     for(var storeIndex = 0; storeIndex < allLocations.length; storeIndex++) {

//         var printStoreName = document.getElementById(allLocations[storeIndex].id + 'Title');
//         printStoreName.innerHTML += allLocations[storeIndex].name;

//         // Loop through each hour of the day
//         for(var hoursIndex = 0; hoursIndex < allLocations[storeIndex].openTime.length; hoursIndex++) {
//             // Generate Random Number
//             function randomNumCustomers() {
//                 return Math.floor(Math.random() * (allLocations[storeIndex].max - allLocations[storeIndex].min + 1)) + allLocations[storeIndex].min;
//             };
//             var holdFuncValue = randomNumCustomers();
//             var printToScreen = document.getElementById(allLocations[storeIndex].id + '-ul');
//             printToScreen.innerHTML += '<li>' + allLocations[storeIndex].openTime[hoursIndex] + ': ' + holdFuncValue + ' Cookies</li>';
//             allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
//         }
        
//         printToScreen.innerHTML += '<li>Total: ' + allLocations[storeIndex].total + ' Cookies</li>';

//     }

// }



// cookiesPerHour();










function cookiesPerHour() {

    var allLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

    for(var storeIndex = 0; storeIndex < allLocations.length; storeIndex++) {

        var printStoreName = document.getElementById(allLocations[storeIndex].id + 'Title');
        printStoreName.innerHTML += allLocations[storeIndex].name;

        var printStoreTable = document.getElementById(allLocations[storeIndex].id + '-table');
        printStoreTable.innerHTML += '<tr><th>Time</th><th>Cookies</th><th>Total Money</th></tr>';
        
        var totalMoneyDay = 0;

        // Loop through each hour of the day
        for(var hoursIndex = 0; hoursIndex < allLocations[storeIndex].openTime.length; hoursIndex++) {
            // Generate Random Number
            function randomNumCustomers() {
                return Math.floor(Math.random() * (allLocations[storeIndex].max - allLocations[storeIndex].min + 1)) + allLocations[storeIndex].min;
            };
            var holdFuncValue = randomNumCustomers();
            var totalMoneyPerHour = allLocations[storeIndex].ave * holdFuncValue;
            totalMoneyDay += totalMoneyPerHour;

            printStoreTable.innerHTML += '<tr><td>' + allLocations[storeIndex].openTime[hoursIndex] + '</td><td>' + holdFuncValue + '</td><td>' + totalMoneyPerHour + '</td></tr>';
            allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
            allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
        }
        printStoreTable.innerHTML += '<tr><th>Total:</th><th>' + allLocations[storeIndex].total + '</th><th>' + totalMoneyDay + '</th></tr>';
        

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
