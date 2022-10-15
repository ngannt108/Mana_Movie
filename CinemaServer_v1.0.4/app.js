const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const os = require('os');

const port = 3003;
const ip = os.networkInterfaces();
const DOMAIN = `${ip[Object.keys(ip)[0]][1].address}:${port}`
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(cors())
app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));   
app.use(bodyParser.raw({ verify: rawBodySaver, type: '*/*' }));
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/cinema', require('./Routes/RouteCinema'));
app.use('/movie', require('./Routes/RouteMovie'));
app.use('/user', require('./Routes/RouteUser'));
app.get('/', async function (req, res) { res.redirect(301, `http://${DOMAIN}/api`); })

app.listen(port, function () {
    console.log(`Your app running on port ${DOMAIN}`);
})