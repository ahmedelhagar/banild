# 🌙 حل مشكلة Dark Mode في Tailwind v4

## المشكلة
في Tailwind CSS v4، الـ `dark:` prefix لا يعمل بشكل صحيح مع CSS Variables المخصصة.

```tsx
// ❌ لا يعمل في Tailwind v4
<div className="bg-lightmode-primary dark:bg-darkmode-secondary">
```

## الحل الجديد: useTheme Hook

### 1. إنشاء useTheme Hook
```tsx
// src/lib/useTheme.tsx
import { useDarkMode } from './useDarkMode';

export const useTheme = () => {
  const { isDarkMode } = useDarkMode();

  const getThemeClass = (lightClass: string, darkClass: string) => {
    return isDarkMode ? darkClass : lightClass;
  };

  const themeClasses = {
    bgPrimary: getThemeClass('bg-[--color-lightmode-primary]', 'bg-[--color-darkmode-primary]'),
    bgSecondary: getThemeClass('bg-[--color-lightmode-secondary]', 'bg-[--color-darkmode-secondary]'),
    textPrimary: getThemeClass('text-[--color-lightmode-primarytxt]', 'text-[--color-darkmode-primarytxt]'),
    // ... المزيد من الألوان
  };

  return { isDarkMode, getThemeClass, ...themeClasses };
};
```

### 2. الاستخدام في المكونات
```tsx
// ✅ يعمل بشكل صحيح
import { useTheme } from '@/lib/useTheme';

export default function MyComponent() {
  const { bgPrimary, textPrimary, isDarkMode } = useTheme();

  return (
    <div className={`${bgPrimary} ${textPrimary} p-4`}>
      المحتوى هنا
    </div>
  );
}
```

### 3. للألوان المخصصة
```tsx
const { getThemeClass } = useTheme();

const customBg = getThemeClass(
  'bg-blue-500', // الوضع الفاتح
  'bg-blue-700'  // الوضع المظلم
);

return <div className={customBg}>محتوى مخصص</div>;
```

## المزايا
- ✅ يعمل مع Tailwind v4
- ✅ تحكم كامل في الألوان
- ✅ TypeScript support
- ✅ أداء ممتاز
- ✅ سهولة الصيانة

## البدائل الأخرى

### البديل 1: استخدام CSS Classes مباشرة
```css
/* globals.css */
.dark {
  --my-bg: var(--color-darkmode-primary);
  --my-text: var(--color-darkmode-primarytxt);
}

:root {
  --my-bg: var(--color-lightmode-primary);
  --my-text: var(--color-lightmode-primarytxt);
}
```

```tsx
<div className="bg-[--my-bg] text-[--my-text]">
```

### البديل 2: Conditional Classes
```tsx
<div className={cn(
  "p-4",
  isDarkMode 
    ? "bg-[--color-darkmode-primary] text-[--color-darkmode-primarytxt]"
    : "bg-[--color-lightmode-primary] text-[--color-lightmode-primarytxt]"
)}>
```

## الخلاصة
useTheme hook هو أفضل حل للتعامل مع Dark Mode في Tailwind v4 مع CSS Variables المخصصة.