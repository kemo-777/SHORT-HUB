const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email: email || 'admin@shorts.hub' }, 'secret_key_123', { expiresIn: '7d' });
    res.json({ token, msg: 'تم تسجيل الدخول بنجاح' });
});

router.post('/signup', (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email: email || 'admin@shorts.hub' }, 'secret_key_123', { expiresIn: '7d' });
    res.json({ token, msg: 'تم إنشاء الحساب بنجاح' });
});

module.exports = router;