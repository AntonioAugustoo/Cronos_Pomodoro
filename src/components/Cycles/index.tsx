import { useTaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/GetNextCycle';
import { getNextCycleType } from '../../utils/GetNextCycleType';
import styles from './styles.module.css';

export function Cycles() {

const {state} = useTaskContext();

const cycleStep =  Array.from({ length: state.currentCycle });

 const cycleDescription = {
  workTime: 'Ciclo de foco',
  shortBreakTime: 'Ciclo de descanso curto',
  longBreakTime: 'Ciclo de descanso longo',
}


  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>

        
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return <span 
           key={nextCycle}
           className={`${styles.cycleDot} ${styles[nextCycleType]}`}
           aria-label={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
            title={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
          ></span>
        })}
        
      </div>
    </div>
  );
}
