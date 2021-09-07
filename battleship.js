
//View object. We use it for manipulating with view on browser window
var view ={
    displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");

    },
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
};

// Ships with locactions
//var ship1 = {
//    locations: ["10","20","30"],
//    hits: ["", "", ""]
//};
//var ship2 = {
//    locations: ["32","33","34"],
//    hits: ["", "", ""]
//};
//var ship1 = {
//    locations: ["63","64","65"],
//    hits: ["", "", "hit"]
//};

var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
             { locations: ["24", "34", "44"], hits: ["", "", ""] },
             { locations: ["10", "11", "12"], hits: ["", "", ""] } ],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++)  {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

//A=0, B=1, C=2, D=3, E=4, F=5, G=6

//view.displayHit("06");
//view.displayMiss("13");
//view.displayHit("24");
//view.displayMiss("31");
//view.displayHit("10");
//view.displayHit("34");
//view.displayMiss("50");
//view.displayHit("11");
//view.displayHit("26");
//view.displayHit("11");
//view.displayHit("12");
//view.displayHit("44");
//view.displayHit("16");
//view.displayMiss("01");

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");