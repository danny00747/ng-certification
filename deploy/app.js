const express = require('express');
const path = require('path');

// Initialize the app
const app = express();


// set the static folder
app.use(express.static(path.join(__dirname, 'dist', 'angular-certification')));


app.get('/', (req, res) => {
    return res.sendFile(path
        .join(__dirname + '/dist', 'angular-certification', 'index.html'));
});

app.get('*', (req, res) => {
    return res.sendFile(path
        .join(__dirname + '/dist', 'angular-certification', 'index.html'));
});

app.listen(3000, () => console.log('server started !'));
