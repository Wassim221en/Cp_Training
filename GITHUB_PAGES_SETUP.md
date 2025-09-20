# إعداد GitHub Pages للمشروع

## المشاكل التي تم حلها:

### 1. مسارات الأصول (Assets Paths)
- **المشكلة**: كانت المسارات في الملفات المبنية تبدأ بـ `/assets/` بدلاً من `/Cp_Training/assets/`
- **الحل**: إضافة `base: '/Cp_Training/'` في `vite.config.ts` عند البناء للإنتاج

### 2. إعداد React Router
- **المشكلة**: كانت الـ routes تحتوي على `/Cp_Training/` في كل route
- **الحل**: استخدام `basename="/Cp_Training"` في `BrowserRouter` وإزالة البادئة من الـ routes

### 3. GitHub Actions Workflow
- **المشكلة**: كان يمرر `--base=/Cp_Training/` كمعامل منفصل
- **الحل**: استخدام `NODE_ENV=production` لتفعيل الـ base path تلقائياً

## التغييرات المطلوبة:

### 1. في `vite.config.ts`:
```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Cp_Training/' : '/',
  // باقي الإعدادات...
}));
```

### 2. في `client/App.tsx`:
```typescript
<BrowserRouter basename="/Cp_Training">
  <Layout>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/intermediate" element={<Intermediate />} />
      <Route path="/advanced" element={<Advanced />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
</BrowserRouter>
```

### 3. في `.github/workflows/blank.yml`:
```yaml
- name: Build project
  run: NODE_ENV=production npm run build
```

### 4. في `package.json`:
```json
"predeploy": "NODE_ENV=production npm run build",
"deploy": "cp dist/spa/index.html dist/spa/404.html && gh-pages -d dist/spa"
```

## كيفية النشر:

### الطريقة الأولى: GitHub Actions (تلقائي)
1. ادفع التغييرات إلى branch `Stage`
2. سيتم البناء والنشر تلقائياً

### الطريقة الثانية: يدوياً
```bash
npm run deploy
```

## التحقق من النشر:
- الرابط: `https://wassim221en.github.io/Cp_Training/`
- تأكد من أن جميع الأصول تحمل بشكل صحيح
- تأكد من أن الـ routing يعمل بشكل صحيح

## ملاحظات مهمة:
- ملف `404.html` يتم إنشاؤه تلقائياً من `index.html` لدعم SPA routing
- الـ base path يتم تطبيقه فقط في الإنتاج، محلياً يعمل على `/`
- تأكد من أن GitHub Pages مفعل في إعدادات المستودع
