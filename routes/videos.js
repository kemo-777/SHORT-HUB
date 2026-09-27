const express = require('express');
const router = express.Router();

router.post('/download', (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ msg: 'الرابط مطلوب' });
    }
    // محاكاة السحب الناجح والفوري للفيديو
    res.json({ 
        success: true, 
        msg: 'تم سحب الفيديو بنجاح', 
        video: { url, createdAt: new Date() } 
    });
});

router.get('/', (req, res) => {
    res.json([]);
});

module.exports = router;