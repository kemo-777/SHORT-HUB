const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Mock Auth & Video Download API
app.post('/api/auth/login', (req, res) => {
    const { email } = req.body;
    res.json({ token: 'mock_token_123', msg: 'تم تسجيل الدخول بنجاح' });
});

app.post('/api/auth/signup', (req, res) => {
    const { email } = req.body;
    res.json({ token: 'mock_token_123', msg: 'تم إنشاء الحساب بنجاح' });
});

app.post('/api/videos/download', (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ msg: 'الرابط مطلوب' });
    
    // إرجاع بيانات الفيديو المسحوب بنجاح
    res.json({ 
        success: true, 
        msg: 'تم سحب الفيديو بنجاح', 
        video: { url, createdAt: new Date() } 
    });
});

app.get('/api/videos', (req, res) => {
    res.json([]);
});

// Root Route
app.get('/', (req, res) => {
    res.json({ status: 'Server is running successfully 🚀' });
});

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (Standalone Mode)`);
});