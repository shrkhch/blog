import { useState, useEffect} from 'react';
import { useTheme } from 'next-themes';
import { SunLight, HalfMoon } from 'iconoir-react';

export default function ToggleButton () {
    const {theme, setTheme } = useTheme();
    const [ mounted, setMounted] = useState(false);

    useEffect ( () => setMounted(true), []);

    let icon;
    if (mounted) {
        if(theme === 'dark') {
            icon = <SunLight />;
        } else {
            icon = <HalfMoon />;
        }
    }
    return (
        <div>
            <button
            type="button"
            onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark' )}
            >
            {icon}
            </button>
        </div>
    )
}