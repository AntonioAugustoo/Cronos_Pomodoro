

import { useTaskContext } from '../../contexts/TaskContext';
import styles from './Styles.module.css'


export function CoutDown( ) {
  const { state } = useTaskContext();
  
  return (
    <div className={styles.coutdown}>{state.formattedSecondsRemaining}</div> 
  );
}
