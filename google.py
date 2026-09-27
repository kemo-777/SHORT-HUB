import os

def create_verification_file():
    print("=== أداة إنشاء ملف إثبات الملكية لجوجل ===")
    code = input("اكتب كود التحقق من جوجل (مثال: google4176ed64216990ce): ").strip()
    
    if not code:
        print("خطأ: لم تقم بإدخال أي كود!")
        return

    # التأكد من الصيغة الصحيحة لاسم الملف
    filename = f"{code}.html"
    file_content = f"google-site-verification: {filename}"

    # إنشاء الملف في المجلد الحالي
    with open(filename, "w", encoding="utf-8") as f:
        f.write(file_content)

    print(f"\n تم إنشاء الملف بنجاح باسم: {filename}")
    print("ارفع المشروع الآن باستخدام التيرمينال عبر الأوامر التالية:")
    print("git add .")
    print('git commit -m "Add Google verification file"')
    print("git push origin main")
    print("npx rimraf node_modules/.cache/gh-pages")
    print("npm run deploy")

if __name__ == "__main__":
    create_verification_file()