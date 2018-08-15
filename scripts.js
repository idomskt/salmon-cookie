var Store = function(id, name, min, max, ave) {
    this.id = id;
    this.name = name;
    this.min = min;
    this.max = max;
    this.ave = ave;
    this.hours = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
    this.total = 0;
    this.randomNumCustomers = function() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    };
}



var stores = [];

stores.push(new Store('pioneerSquare', 'Pioneer Square', 17, 88, 5.2));
stores.push(new Store('portlandAirport', 'Portland Airport', 6, 24, 1.2));
stores.push(new Store('washingtonSquare', 'Washington Square', 11, 38, 1.9));
stores.push(new Store('sellwood', 'Sellwood', 20, 48, 3.3));
stores.push(new Store('pearlDistrict', 'Pearl District', 3, 24, 2.6));



function printStores() {
    // Loop through each location

    for(var storesIndex = 0; storesIndex < stores.length; storesIndex++) {
        
        // Create a title to each store
        var title = document.getElementById(stores[storesIndex].id + 'Title');
        title.innerText = stores[storesIndex].name;
        // Create a table for each store
        var printTable = document.getElementById(stores[storesIndex].id)
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var row = document.createElement('tr');
        var th = document.createElement('th');

        th.innerText = 'Time';
        row.appendChild(th);
        th = document.createElement('th');
        th.innerText = 'Cookies';
        row.appendChild(th);
        th = document.createElement('th');
        th.innerText = 'Money';
        row.appendChild(th);
        
        tbody.appendChild(row);
        table.appendChild(tbody);
        printTable.appendChild(table);
        
        // Loop through each hour
        for(hoursIndex = 0; hoursIndex < stores[storesIndex].hours.length; hoursIndex++) {
            // Hold the value of the random number
            
            row = document.createElement('tr');
            var tableDataTime = document.createElement('td');
            tableDataTime.innerText = stores[storesIndex].hours[hoursIndex];
            row.appendChild(tableDataTime);
            
            var tableDataCookies = document.createElement('td');
            var storeRandNum = stores[storesIndex].randomNumCustomers();
            tableDataCookies.innerText = storeRandNum;
            row.appendChild(tableDataCookies);
            stores[storesIndex].total += storeRandNum;

            var tableDataMoney = document.createElement('td');
            tableDataMoney.innerText = storeRandNum * stores[storesIndex].ave;
            row.appendChild(tableDataMoney);
                    
            tbody.appendChild(row);
    
        }

        row = document.createElement('tr');

        var printTotal = document.createElement('th');
        printTotal.innerText = 'Total';
        row.appendChild(printTotal);

        printTotal = document.createElement('th');
        printTotal.innerText = stores[storesIndex].total;
        row.appendChild(printTotal);

        printTotal = document.createElement('th');
        printTotal.innerText = stores[storesIndex].total * stores[storesIndex].ave;
        row.appendChild(printTotal);

        tbody.appendChild(row);
        

    }
}

printStores();