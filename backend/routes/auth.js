const router = require('express').Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = "iotsecret";

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    db.run(
        `INSERT INTO users(username, password) VALUES(?, ?)`,
        [username, hash],
        err => {
            if(err) return res.status(400).send("User exists");
            res.send("Registered");
        }
    );
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username=?`, [username], async (err, user) => {
        if(!user) return res.status(400).send("No user");

        const ok = await bcrypt.compare(password, user.password);
        if(!ok) return res.status(401).send("Wrong password");

        const token = jwt.sign({ id: user.id }, SECRET);
        res.json({ token });
    });
});

module.exports = router;
