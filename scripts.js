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

//         var printStoreTable = document.getElementById(allLocations[storeIndex].id + '-table');
//         printStoreTable.innerHTML += '<tr><th>Time</th><th>Cookies</th><th>Total Money</th></tr>';
        
//         // Loop through each hour of the day
//         for(var hoursIndex = 0; hoursIndex < allLocations[storeIndex].openTime.length; hoursIndex++) {

//             // Generate Random Number
//             function randomNumCustomers() {
//                 return Math.floor(Math.random() * (allLocations[storeIndex].max - allLocations[storeIndex].min + 1)) + allLocations[storeIndex].min;
//             };
//             var holdFuncValue = randomNumCustomers();

//             // Calculating the values
//             var cookiesPerDay = allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
//             var totalMoneyPerHour = allLocations[storeIndex].ave * holdFuncValue; // Multiply the random number of each hour with the price avarage
//             var totalMoneyPerDay = cookiesPerDay * allLocations[storeIndex].ave; // Multiply the total cookies per day with the the avarage

//             printStoreTable.innerHTML += '<tr><td>' + allLocations[storeIndex].openTime[hoursIndex] + '</td><td>' + holdFuncValue + '</td><td>' + totalMoneyPerHour + '</td></tr>';
//         }

//         printStoreTable.innerHTML += '<tr><th>Total:</th><th>' + cookiesPerDay + '</th><th>' + totalMoneyPerDay + '</th></tr>';
        

//     }

// }



// cookiesPerHour();



function cookiesPerHour() {

    var allLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

    for(var storeIndex = 0; storeIndex < allLocations.length; storeIndex++) {

        var printStoreName = document.getElementById(allLocations[storeIndex].id + 'Title');
        printStoreName.innerHTML += allLocations[storeIndex].name;

        var printStoreTable = document.getElementById(allLocations[storeIndex].id);

        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        
        // Appending
        printStoreTable.appendChild(table);
        table.appendChild(tbody);
        tbody.appendChild(tr);
        
        // Print Table TH
        var thLeft = document.createElement('th');
        var thCenter = document.createElement('th');
        var thRight = document.createElement('th');
        
        thLeft.innerText = "Time";
        thCenter.innerText = "Cookies";
        thRight.innerText = "Money";
        
        tr.appendChild(thLeft);
        tr.appendChild(thCenter);
        tr.appendChild(thRight);
        
        // Loop through each hour of the day
        for(var hoursIndex = 0; hoursIndex < allLocations[storeIndex].openTime.length; hoursIndex++) {
            
            // Generate Random Number
            function randomNumCustomers() {
                return Math.floor(Math.random() * (allLocations[storeIndex].max - allLocations[storeIndex].min + 1)) + allLocations[storeIndex].min;
            };
            var holdFuncValue = randomNumCustomers();
            
            // Calculating the values
            var cookiesPerDay = allLocations[storeIndex].total += holdFuncValue; // Add the result of the random number to the total
            var tableDataTime = allLocations[storeIndex].openTime[hoursIndex];
            var totalMoneyPerHour = allLocations[storeIndex].ave * holdFuncValue; // Multiply the random number of each hour with the price avarage
            var totalMoneyPerDay = cookiesPerDay * allLocations[storeIndex].ave; // Multiply the total cookies per day with the the avarage
            
            
            var tableData = document.createElement('tr');
            var tableDataLeft = document.createElement('td');
            var tableDataCenter = document.createElement('td');
            var tableDataRight = document.createElement('td');

            tableDataLeft.innerText = tableDataTime;
            tableDataCenter.innerText = holdFuncValue;
            tableDataRight.innerText = totalMoneyPerHour;

            tableData.appendChild(tableDataLeft);
            tableData.appendChild(tableDataCenter);
            tableData.appendChild(tableDataRight);

            tbody.appendChild(tableData);

        }
        
        var tableTotal = document.createElement('tr');
        var tableTotalLeft = document.createElement('th');
        var tableTotalCenter = document.createElement('th');
        var tableTotalRight = document.createElement('th');

        tableTotalLeft.innerText = "Total";
        tableTotalCenter.innerText = cookiesPerDay;
        tableTotalRight.innerText = totalMoneyPerDay;

        tableTotal.appendChild(tableTotalLeft);
        tableTotal.appendChild(tableTotalCenter);
        tableTotal.appendChild(tableTotalRight);
        tbody.appendChild(tableTotal);
     
        
        
    }

}



cookiesPerHour();
