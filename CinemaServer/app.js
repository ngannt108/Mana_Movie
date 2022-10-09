const express = require('express');
var cors = require('cors')

var app = express()
app.use(cors())

const port = 3001;

var RouteRap = require('./Routes/RouteRap');
var RouteMovie = require('./Routes/RouteMovie');
const DOMAIN = `http://10.88.55.39:${port}`

app.use('/cinema', RouteRap);
app.use('/movie', RouteMovie);

app.get('/', async function (req, res) {
    res.send(`
        <br/> - Lấy danh sách các loại rạp - GET: ${DOMAIN}/Cinema
        <br/>
        <br/> - Lấy danh sách các rạp - GET: ${DOMAIN}/Cinema/:CinemaId
        <br/>
        <br/> - Lấy danh sách các phim theo ngày - GET: ${DOMAIN}/Cinema/:CinemaId/:Date
        <br/> * Date type 'yyyy-MM-dd'
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    `);
})

app.listen(port, function () {
    console.log(`Your app running on port ${DOMAIN}:${port}`);
})