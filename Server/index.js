const express = require('express');
const app = express();
const port = 5001;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const e = require('express');


app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.use(cookieParser());
app.use(express.json());
app.use('/api', routes)


mongoose.connect('mongodb://localhost:27017/jwtproject', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});