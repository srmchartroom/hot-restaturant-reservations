// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
// =============================================================

const reservations = [
  {
    name: "Groovy Colin",
    phone: "444-444-4444",
    email: "groovyorange@gmail.com",
    uniqueID: "24",
  },
];

const waiting = [
  {
    name: "Groovy Luke",
    phone: "555-555-5555",
    email: "groovygreen@gmail.com",
    uniqueID: "32",
  },
];

// Reservations.js file ... //

// Create New Reseration - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations, tables);
});

// app.get("/api/waiting"), function(req, res) {
// return res.json(waiting);
//   });

// app.get("/api/tables"), function(req, res) {
// return res.json(tables);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
