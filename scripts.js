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

    this.createTitle = function() {
        var titleID = document.getElementById(this.id + 'Title');
        titleID.innerText = this.name;
    };

    this.createTables = function() {
            var tableID = document.getElementById(this.id);
            var table = document.createElement('table');
            var tbody = document.createElement('tbody');
            tbody.setAttribute('class', 'tbody');
            var row = document.createElement('tr');
            var theader = document.createElement('th');
            theader.innerText = 'Time';
            row.appendChild(theader);
            theader = document.createElement('th');
            theader.innerText = 'Cookies';
            row.appendChild(theader);
            theader = document.createElement('th');
            theader.innerText = 'Money';
            row.appendChild(theader);
            tbody.appendChild(row);
            table.appendChild(tbody);
            tableID.appendChild(table);
        };

        this.createData = function() {

            var findTBody1 = document.getElementById(this.id);
            var findTBody2 = findTBody1.getElementsByTagName('tbody')[0];

            for(var hoursIndex = 0; hoursIndex < this.hours.length; hoursIndex++) {
                var randNumber = this.randomNumCustomers();
                row = document.createElement('tr');
                tdata = document.createElement('td');
                tdata.innerText = this.hours[hoursIndex];
                row.appendChild(tdata);
                tdata = document.createElement('td');
                tdata.innerText = randNumber;
                this.total += randNumber;
                row.appendChild(tdata);
                tdata = document.createElement('td');
                tdata.innerText = randNumber * this.ave;
                row.appendChild(tdata);
                findTBody2.appendChild(row);
            }

            // Bottom TH
            row = document.createElement('tr');
            cell = document.createElement('th');
            cell.innerText = 'Total';
            row.appendChild(cell);
            cell = document.createElement('th');
            cell.innerText = this.total;
            row.appendChild(cell);
            cell = document.createElement('th');
            cell.innerText = this.total * this.ave;
            row.appendChild(cell);
            findTBody2.appendChild(row);
         };


}


var stores = [];

stores.push(new Store('pioneerSquare', 'Pioneer Square', 17, 88, 5.2));
stores.push(new Store('portlandAirport', 'Portland Airport', 6, 24, 1.2));
stores.push(new Store('washingtonSquare', 'Washington Square', 11, 38, 1.9));
stores.push(new Store('sellwood', 'Sellwood', 20, 48, 3.3));
stores.push(new Store('pearlDistrict', 'Pearl District', 3, 24, 2.6));


for(var storesIndex = 0; storesIndex < stores.length; storesIndex++) {
    stores[storesIndex].createTitle();
    stores[storesIndex].createTables();
    stores[storesIndex].createData();
};