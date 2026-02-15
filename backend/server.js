require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// import routes
const dataRoutes = require('./routes/data');
const deviceRoutes = require('./routes/device');
const authRoutes = require('./routes/auth');

// use routes
app.use('/data', dataRoutes);
app.use('/device', deviceRoutes);
app.use('/auth', authRoutes);

// root test
app.get('/', (req, res) => {
    res.send("Edge to Cloud Monitoring API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));

// start MQTT after server start
require('./mqtt');
