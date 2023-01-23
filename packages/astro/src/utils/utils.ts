export const toggleTheme = () => {
  const theme = localStorage.getItem('theme') ?? 'light';

  if (theme === 'light') {
    document.documentElement.classList.add('dark');
    window.localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    window.localStorage.setItem('theme', 'light');
  }
};

export const getTheme = () => {
  return localStorage.getItem('theme') ?? 'light';
};

export const isDarkMode = () => {
  return localStorage.getItem('theme') === 'dark';
};

export const isMacLike = () => {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
};
