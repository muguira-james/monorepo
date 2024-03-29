
// bring in requires library and services. In this case express and CORS
const express = require('express');
const cors = require('cors');

// establish app as an express server
let app = express();
// suggest a port
let port = 3333;

// hard code the player information for now.
const players = {
    "graph": [
        { "FirstName": "Joan", "LastName": "Jet", "ID": 1, "Hole": 1, "HoleLocation": "TEE" },
        { "FirstName": "Ruth", "LastName": "Crist", "ID": 2, "Hole": 1, "HoleLocation": "TEE" },
        { "FirstName": "Beth", "LastName": "Flick", "ID": 3, "Hole": 1, "HoleLocation": "TEE" },
        { "FirstName": "Julie", "LastName": "Ant", "ID": 4, "Hole": 1, "HoleLocation": "FWY" },
        { "FirstName": "Ginny", "LastName": "Grey", "ID": 5, "Hole": 1, "HoleLocation": "FWY" },
        { "FirstName": "Paula", "LastName": "Lamb", "ID": 6, "Hole": 1, "HoleLocation": "GRN" },
        { "FirstName": "Ing", "LastName": "Jones", "ID": 7, "Hole": 2, "HoleLocation": "TEE" },
        { "FirstName": "Kelly", "LastName": "Smith", "ID": 8, "Hole": 2, "HoleLocation": "FWY" },
        { "FirstName": "Eilean", "LastName": "Rams", "ID": 9, "Hole": 2, "HoleLocation": "GRN" },
        { "FirstName": "Barb", "LastName": "Sharp", "ID": 10, "Hole": 4, "HoleLocation": "FWY" },
        { "FirstName": "Carol", "LastName": "Adams", "ID": 11, "Hole": 4, "HoleLocation": "FWY" },
        { "FirstName": "Faith", "LastName": "Hope", "ID": 12, "Hole": 4, "HoleLocation": "GRN" }
    ]
};

// get cross-origin resource sharing working so the browaser will not complain
app.use(cors());

// our 2 API
// /graph returns the array of players and an http status code
app.get('/graph', (req, resp) => {
    console.log("/graph/players...", players.graph.length);
    resp.setHeader('Content-Type', 'application/json');
    resp.send(JSON.stringify(players.graph));
})

// the top level API 
app.get('/', (request, response) => {
    console.log("/...")
    response.setHeader('Content-Type', 'text/html');
    response.send("<div>Hello there, welcome</div>")
})

// start the server
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

// we need this line to expose the "app" to the testing frame work.
module.exports = app;