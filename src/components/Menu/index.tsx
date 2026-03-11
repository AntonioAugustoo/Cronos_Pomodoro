import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, } from 'lucide-react'
import styles from './Styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light';


export function Menu(){
  const storedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
  const [theme, setTheme] = useState<AvailableThemes>(storedTheme);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange 
  (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){

   event.preventDefault(); //nao vai seguir o link

   


   setTheme(prevTheme => {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme;
   } );

  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); //salva a escolha do tema no localStorage do navegador(ATT pagina)
  }, [theme]);

  return (  
    <nav className={styles.menu}>
      <a className ={styles.menuLink} href="#" aria-label='Ir para a homepage' title='Ir para a HOME'>
        <HouseIcon />
        </a>
          <a className ={styles.menuLink} href="#" aria-label='Ir para o histórico' title='Ir para o histórico'>
        <HistoryIcon />
        </a>
          <a className ={styles.menuLink} href="#" aria-label='Ir para as configurações' title='Ir para as configurações'>
        <SettingsIcon />
        </a>
          <a className ={styles.menuLink} href="#" aria-label='Ir para o modo claro' title='Ir para o modo claro' onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
        </a>
    </nav>
  );
}
