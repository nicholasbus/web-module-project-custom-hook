import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialState) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', initialState);
    return [darkMode, setDarkMode]
}

export default useDarkMode;