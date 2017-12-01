var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var seated = [
    {
        name: 'Luis',
        phoneNumber: '800-800-8888',
        email: 'luis@gmail.com',
        id: 'Lui'
    },
    {
        name: 'Adrian',
        phoneNumber: '800-800-9999',
        email: 'adrian@gmail.com',
        id: 'AJ'
    },
    {
        name: 'Diana',
        phoneNumber: '800-800-7777',
        email: 'diana@gmail.com',
        id: 'Big D'
    }
];

var waitList = [
    {
        name: 'Bob',
        phoneNumber: '800-800-5555',
        email: 'bob@gmail.com',
        id: 'Bobby'
    }
]

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname, 'reservations.html'));
});

app.get('/api/tables', function (req, res) {
    res.json(seated);
})

app.get('/api/waitlist', function (req, res) {
    res.json(waitList);
})

app.post('/api/new', function (req, res) {
    var newReservation = req.body;
    if (seated.length < 5) {
        seated.push(newReservation);
    }
    else {
        waitList.push(newReservation);
    }
    res.end();
})

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});