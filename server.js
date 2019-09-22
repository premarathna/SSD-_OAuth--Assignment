const express = require('express')
const bodyParser = require('body-parser')

const ServiceRoute = require('./service/service');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/views/Login'));
app.use('/', express.static(__dirname + '/views/Home'));

app.use('/service', ServiceRoute);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/Login/login.html')
})

app.get('/login-callback', function (req, res) {
  res.sendFile(__dirname + '/views/Login/loginCallback.html')
})

app.get('/profile', function (req, res) {
  res.sendFile(__dirname + '/views/Home/profile.html')
})

// app.get('/post', function (req, res) {
//   res.sendFile(__dirname + '/views/Home/Share.html')
// })

app.listen(3000, function () {
  console.log('App is listening on port 3000!')
})