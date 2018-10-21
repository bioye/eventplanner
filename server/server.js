const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4200;
const cors = require('cors');
const config = require('./database/DB');
const EventPlanRouter = require('./routes/EventPlanRouter');

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/eventplan', EventPlanRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, function(){
    console.log('Server is running on Port: ',PORT);
});