const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/databace');


const app = express();

const port = process.env.PORT  || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Databace is listening and node is running on port ${port}`)});
    }
})

