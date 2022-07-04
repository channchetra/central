import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

    if (!mounted) return null;

  if (currentTheme === 'dark') {
    return (
      <button
        type="button"
        className="p-3 sm:p-4 fixed bottom-3 right-3 sm:bottom-16 sm:right-20 bg-slate-100 dark:bg-zinc-600 rounded-full shadow"
        onClick={() => setTheme('light')}
      >
        <SunIcon className="h-5 w-5 dark:text-dark text-ams-light" />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="p-3 sm:p-4 fixed bottom-3 right-3 sm:bottom-16 sm:right-20 bg-slate-100 dark:bg-zinc-600 rounded-full shadow"
      onClick={() => setTheme('dark')}
    >
      <MoonIcon className="h-5 w-5 text-dark dark:text-ams-light" />
    </button>
  );
}
