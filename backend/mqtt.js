const mqtt = require('mqtt');
const db = require('./db');

// Public MQTT broker (global access)
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    console.log("MQTT Connected (HiveMQ)");

    // Public topic
    client.subscribe('omkar/demo/device1');
});

client.on('message', (topic, message) => {
    const value = parseFloat(message.toString());
    console.log("Received:", value);

    db.run(
        `INSERT INTO data(device_id, value) VALUES(1, ?)`,
        [value]
    );
});
