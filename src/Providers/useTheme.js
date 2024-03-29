import { useState } from "react";

const useTheme = ()=>{
const [theme,setTheme] = useState('light')
    const toggleTheme = ()=>{
        if (theme === 'light') {
            setTheme('dark')
            return;
        }
        setTheme('light')
    }
    return[theme,toggleTheme]
}

export default useTheme