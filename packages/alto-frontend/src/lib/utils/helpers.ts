export const toggleTheme = () => {
	if (import.meta.env.SSR) return;

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
	if (import.meta.env.SSR) return 'light';
	return localStorage.getItem('theme') ?? 'light';
};

export const isDarkMode = () => {
	if (import.meta.env.SSR) return false;
	return localStorage.getItem('theme') === 'dark';
};

export const isMacLike = () => {
	return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
};
