import styles from './Styles.module.css'



export function Footer(){
  return (
    <footer className={styles.footer}>
    <a href=''>Entenda como funciona a tecnica pomodoro</a>
    <a href=''>Cronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
