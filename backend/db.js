const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./iot.db');

db.serialize(() => {

    // Users
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )
    `);

    // Devices
    db.run(`
        CREATE TABLE IF NOT EXISTS devices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            topic TEXT
        )
    `);

    // Sensor Data
    db.run(`
        CREATE TABLE IF NOT EXISTS data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            device_id INTEGER,
            value REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

});

module.exports = db;
