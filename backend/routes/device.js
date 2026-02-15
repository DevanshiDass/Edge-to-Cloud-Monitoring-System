const router = require('express').Router();
const db = require('../db');

router.post('/add', (req, res) => {
    const { name, topic } = req.body;

    db.run(
        `INSERT INTO devices(name, topic) VALUES(?, ?)`,
        [name, topic],
        () => res.send("Device added")
    );
});

module.exports = router;
