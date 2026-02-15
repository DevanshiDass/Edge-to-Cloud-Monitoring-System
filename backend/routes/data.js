const router = require('express').Router();
const db = require('../db');

router.get('/latest', (req, res) => {
    db.all(
        `SELECT * FROM data ORDER BY timestamp DESC LIMIT 20`,
        [],
        (err, rows) => res.json(rows)
    );
});

module.exports = router;
