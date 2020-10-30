const express =  require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./api');

const app = express();

const PORT = process.env.PORT || 3002

if(!process.env.NODE_ENV || process.env.NODE_ENV !== 'production'){
    app.use(cors())
} 


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname, 'build')));

app.use('/api', routes);

app.listen(PORT, () =>{
    console.log('API started on port' + PORT);
});

