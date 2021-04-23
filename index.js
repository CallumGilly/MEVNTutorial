//require the dependicies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//make the app
const app = express();

app.use(morgan('tiny')); //From what I've found - used to log HTTP to the console
app.use(cors()); //From what I've found - seams to allow api requests? https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use(bodyParser.json()); //Lets the backend interpret data from the front end

//sends json to the root
app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});


//Standered listener
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});