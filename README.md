# Shorts Hub 🚀
منصة سحابية متكاملة لجمع وإدارة فيديوهات الشورتس (تيك توك، إنستجرام، يوتيوب) تلقائياً، مع نظام اشتراكات وتخزين سحابي (مجاني 50GB، برو 500GB، إندستريال 1TB).

## التقنيات المستخدمة:
- **Frontend:** HTML5, TailwindCSS, JavaScript (Responsive SaaS Dashboard)
- **Backend:** Node.js, Express, Mongoose (JWT Authentication)
- **Database:** MongoDB
- **Downloader Engine:** Python, Flask, yt-dlp (Watermark-free extraction)

## كيفية التشغيل عبر Docker Compose:
1. تأكد من تثبيت Docker و Docker Compose على جهازك.
2. قم بتشغيل الأمر التالي في المجلد الرئيسي:
```bash
docker-compose up --build