import { useEffect, useState } from "react";

export const useTheme = () => {
   const [theme, setTheme] = useState('light');

   const html = document.documentElement;

   const handleTheme = () => {
      if (theme === 'light') {
         html.classList.remove('light')
         html.classList.add('dark')
         setTheme('dark');
         localStorage.setItem('theme', 'dark');
      } else {
         html.classList.add('light')
         html.classList.remove('dark')
         setTheme('light');
         localStorage.setItem('theme', 'light');
      }
   }

   useEffect(() => {
      const currentTheme = localStorage.getItem('theme') || 'light';
      setTheme(currentTheme);
      html.classList.add(currentTheme)
   }, [html.classList])

   return {handleTheme, theme}
}