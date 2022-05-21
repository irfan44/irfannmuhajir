import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from 'components/common/ThemeSwitcher/MoonIcon';
import SunIcon from 'components/common/ThemeSwitcher/SunIcon';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const setCurrentTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      checked={currentTheme}
      onChange={setCurrentTheme}
      className={`${
        currentTheme === 'dark'
          ? 'bg-neutral-800 border-neutral-700'
          : 'bg-neutral-100 border-neutral-200'
      } relative inline-flex h-8 w-16 items-center rounded-full border`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          currentTheme === 'dark'
            ? 'translate-x-9 bg-neutral-900'
            : 'translate-x-1 bg-white'
        } inline-block h-6 w-6 transform rounded-full p-1`}
      >
        {currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </span>
    </Switch>
  );
};

export default ThemeSwitcher;
