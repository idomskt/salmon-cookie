var pioneerSquare = {
    id: "pioneerSquare",
    name: "Pioneer Square",
    min: 17,
    max: 88,
    ave: 5.2,
    openTime: ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"],
    randomNumCustomers: function() {
        return Math.floor(Math.random() * (pioneerSquare.max - pioneerSquare.min + 1)) + pioneerSquare.min;
        // return pioneerSquare.min*pioneerSquare.max;
    }
};

var storeLocations = [pioneerSquare];


function calcHourCost(storeName) {

    for(var store = 0; store < storeLocations.length; store++) {

        var printStoreName = document.getElementById(storeName.id + 'Title');
        printStoreName.innerHTML+=storeName.name;
        
        for(var i = 0; i < storeName.openTime.length; i++) {
            var printHours = document.getElementById(storeName.id + '-ul');
            printHours.innerHTML+='<li>' + storeName.openTime[i] + ': ' + storeName.randomNumCustomers() + ' Cookies</li>';
        }
    }

}

calcHourCost(pioneerSquare);
