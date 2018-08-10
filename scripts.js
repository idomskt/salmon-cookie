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






function cookiesPerHour() {

    var allLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

    for(var storeIndex = 0; storeIndex < allLocations.length; storeIndex++) {

        var printStoreName = document.getElementById(allLocations[storeIndex].id + 'Title');
        printStoreName.innerHTML += allLocations[storeIndex].name;

        var printStoreTable = document.getElementById(allLocations[storeIndex].id + '-table');
        printStoreTable.innerHTML += '<tr><th>Time</th><th>Cookies</th><th>Total Money</th></tr>';
        
        // Loop through each hour of the day
        for(var hoursIndex = 0; hoursIndex < allLocations[storeIndex].openTime.length; hoursIndex++) {

            // Generate Random Number
            function randomNumCustomers() {
                return Math.floor(Math.random() * (allLocations[storeIndex].max - allLocations[storeIndex].min + 1)) + allLocations[storeIndex].min;
            };
            var holdFuncValue = randomNumCustomers();

            // Calculating the values
            var cookiesPerDay = allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
            var totalMoneyPerHour = allLocations[storeIndex].ave * holdFuncValue; // Multiply the random number of each hour with the price avarage
            var totalMoneyPerDay = cookiesPerDay * allLocations[storeIndex].ave; // Multiply the total cookies per day with the the avarage

            printStoreTable.innerHTML += '<tr><td>' + allLocations[storeIndex].openTime[hoursIndex] + '</td><td>' + holdFuncValue + '</td><td>' + totalMoneyPerHour + '</td></tr>';
        }

        printStoreTable.innerHTML += '<tr><th>Total:</th><th>' + cookiesPerDay + '</th><th>' + totalMoneyPerDay + '</th></tr>';
        

    }

}



cookiesPerHour();
