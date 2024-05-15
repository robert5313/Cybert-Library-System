const express = require('express');
const app = express();
const port = 5001;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const book = require('./routes/book');
const payment = require('./routes/payment');
const reservation = require('./routes/reservation');
const cookieParser = require('cookie-parser');
const e = require('express');

app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your Next.js app's domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

app.use(cookieParser());
app.use(express.json());
app.use('/api', routes);
//app.use('/api/register', routes);
app.use('/book', book);
app.use('/payment', payment);
app.use('/reservation', reservation);



mongoose.connect('mongodb://localhost:27017/jwtproject', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});