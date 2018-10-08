const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
var cors = require('cors');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const terminalLink = require('terminal-link');
// var favicon = require('serve-favicon')
const favicon = require('express-favicon');

// Add your routes here, etc.
app.use(express.static('public'));
app.use(cors());
app.use(favicon(path.join(__dirname + 'public','favicon.png')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '150mb' }));

const index_File = path.join(__dirname, 'public', 'src', 'index.html');


app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile(index_File);
});

app.post('/addvideo', (req, res) => {
    console.log(req.body.windowsLocation);
    // console.log(req.body.userMessage);
    res.send(JSON.stringify('Location Added: '+req.body.windowsLocation));
});

app.post('/adduserMessage', (req, res) => {
    console.log(req.body.userEmail);
    console.log(req.body.userMessage);
    res.send(JSON.stringify('User Email and Message Added: '+JSON.stringify(req.body.userMessage)+ ' '+JSON.stringify(req.body.userEmail)));
});


app.listen(app.get('port'), () => {
    console.log(chalk.green(`Example server has started at ${app.get('port')}`));
    const link = terminalLink('', `http://localhost:${app.get('port')}`);
    console.log(chalk.yellow('click on link - ') + chalk.blue(link));
});