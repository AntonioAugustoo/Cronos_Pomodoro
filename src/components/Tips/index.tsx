import { useTaskContext } from "../../contexts/TaskContext";
import { getNextCycle } from "../../utils/GetNextCycle";
import { getNextCycleType } from "../../utils/GetNextCycleType";


export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por <b>{state.config.workTime}min</b></span>,
    shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}min</b></span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>Próximo descaso é de <b>{state.config.shortBreakTime}min</b></span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}