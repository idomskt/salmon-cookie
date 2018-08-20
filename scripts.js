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

    this.createDivs = function() {
        var allTables = document.getElementsByClassName('storeTables')[0];
        var tableDiv = document.createElement('div');
        tableDiv.setAttribute('id', id);
        tableDiv.setAttribute('class', "location");
        var tableH2 = document.createElement('h2');
        tableH2.setAttribute('id', id+'Title');
        tableH2.innerText = this.name;
        tableDiv.appendChild(tableH2);
        allTables.appendChild(tableDiv);

        if(document.forms[0].tablePosition.value == '' || document.forms[0].tablePosition.value == 'last') {
            allTables.appendChild(tableDiv);
        } else {
            allTables.insertBefore(tableDiv, allTables.childNodes[0]);
        }
        
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

function addStore() {
    var form = document.forms[0];
    var storeName = form.storeName.value;
    var minCust = parseInt(form.minCust.value);
    var maxCust = parseInt(form.maxCust.value);
    var average = parseInt(form.average.value);
    var storeID = storeName.split(' ');
    var idFirstWord = storeID[0];
    var idSecondWord = storeID[1];
    var secondWordUpper = idSecondWord[0].charAt(0).toUpperCase() + idSecondWord.substr(1);;
    var storeIDFull = idFirstWord.toLowerCase() + secondWordUpper;
    var formFeedback = form.getElementsByTagName('p')[0];

    if(!storeName) {
        formFeedback.innerText = 'Please fill all required inputs';
        form.storeName.parentElment.style.color = 'red';
    } else if(!minCust) {
        formFeedback.innerText = 'Please fill all required inputs';
        form.minCust.style.color = 'red';
    } else if(!maxCust) {
        formFeedback.innerText = 'Please fill all required inputs';
        form.maxCust.style.color = 'red';
    } else if(!average) {
        formFeedback.innerText = 'Please fill all required inputs';
        form.average.style.color = 'red';
    } else {
        stores.push(new Store(storeIDFull, storeName, minCust, maxCust, average));
        stores[stores.length -1].createDivs();
        stores[stores.length -1].createTables();
        stores[stores.length -1].createData();
    }
 

}


    for(var storesIndex = 0; storesIndex < stores.length; storesIndex++) {
        stores[storesIndex].createDivs();
        stores[storesIndex].createTables();
        stores[storesIndex].createData();
    };

function expandOnClick() {
    var tables = document.querySelector('div.storeTables');
    var button = document.getElementsByTagName('button')[0];

    if(tables.classList.contains('close')) {
        button.innerText = 'Hide tables';
        tables.classList.remove('close');
        tables.classList.add('open');
    } else {
        button.innerText = 'Check tables';
        tables.classList.add('close');
        tables.classList.remove('open');
    }
    
}

