const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const os = require('os');

const port = 3001;
const ip = os.networkInterfaces();
const DOMAIN = `http://${ip[Object.keys(ip)[0]][1].address}:${port}`
const app = express()

const rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(cors())
app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: '*/*' }));

app.use('/cinema', require('./Routes/RouteRap'));
app.use('/movie', require('./Routes/RouteMovie'));
app.use('/user', require('./Routes/RouteUser'));
app.get('/', async function (req, res) {
    res.send(`
        ${DOMAIN}/cinema
        <br/>
        ${DOMAIN}/cinema/branch?cineplex=&count=&lastIndex=
        <br/>
        ${DOMAIN}/cinema/branch/detail?apiCinemaId=&cineplex=
        <br/>
        ${DOMAIN}/cinema/branch/schedule?apiCinemaId=&cineplex=&date=
        <br/>
        <br/>
        ${DOMAIN}/movie
        <br/>
        ${DOMAIN}/movie/schedule?apiFilmId=&date=&cineplex=
        <br/>
        ${DOMAIN}/movie/Comment?apiFilmId=
        <br/>
        <br/>
        ${DOMAIN}/user/login
        <br/>
        ${DOMAIN}/user/register
        <br/>
        *email,password
    `)
})

app.listen(port, function () {
    console.log(`Your app running on port ${DOMAIN}`);
})