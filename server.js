const express = require('express');
const connectDB = require('./config/db');


const app = express();

// Connect to DB 
connectDB();

// Init middleware 
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the API' }));

//Define Routes
app.use('/zip', require('./routes/zip'));
app.use('/zipcounty', require('./routes/count'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))