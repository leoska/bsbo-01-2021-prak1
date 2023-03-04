const express = require('express');
const port = 25565;

const app = express();

function successFullAppStarted() {
    console.log('Server successfully started on port ' + port + ', welcome BSBO-01-2021');
}

app.use('/', express.static('build'));

app.listen(port, successFullAppStarted);
