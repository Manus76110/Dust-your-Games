export const TOGGLE_THEME = 'TOGGLE_THEME';
export const toggleTheme = (theme) => ({
    type: TOGGLE_THEME,
    theme,
});

export const LOAD_THEME = 'LOAD_THEME';
export const loadTheme = () => ({
    type: LOAD_THEME,
});

export const SAVE_THEME = 'SAVE_THEME';
export const saveTheme = (theme) => ({
    type: SAVE_THEME,
    theme,
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
    type: TOGGLE_MODAL,
});

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = (value) => ({
    type: TOGGLE_MENU,
    value,
});

export const TOGGLE_PASSWORD = 'TOGGLE_PASSWORD';
export const togglePassword = () => ({
    type: TOGGLE_PASSWORD,
});

export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const toggleLoading = (value) => ({
    type: TOGGLE_LOADING,
    value,
});