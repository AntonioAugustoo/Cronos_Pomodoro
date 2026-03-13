import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton.tsx';
import { MainTemplates } from '../../templates/MainTemplates';
import { Heading } from '../../components/Heading';


import styles from './styles.module.css';
import { formatDate } from '../../utils/FormatDate.ts';
import { getTaskStatus } from '../../utils/getTaskStatus.ts';
import { sortTasks, type SortTasksOptions } from '../../utils/SortTasks.ts';
import { useEffect, useMemo, useState } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext.ts';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';




export function History() {
      useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro';
  }, []);
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTaskOptions] = useState<
    Pick<SortTasksOptions, 'field' | 'direction'>
  >({
    field: 'startDate',
    direction: 'desc',
  });

  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      direction: sortTasksOptions.direction,
      field: sortTasksOptions.field,
    });
  }, [state.tasks, sortTasksOptions.direction, sortTasksOptions.field]);


  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      direction: newDirection,
      field,
    });
  }

    function handleResetHistory() {
      showMessage.dismiss();
    showMessage.confirm('Tem certeza?', confirmation => {
      if (!confirmation) return;

      dispatch({ type: TaskActionTypes.RESET_STATE });
    });
  }


  return (
    <MainTemplates>
      <Container>
        <Heading>
           {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
              <th
                  onClick={() => handleSortTasks({ field: 'name' })}
                  className={styles.thSort}
                >
                  Tarefa ↕
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'duration' })}
                  className={styles.thSort}
                >
                  Duração ↕
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'startDate' })}
                  className={styles.thSort}
                >
                  Data ↕
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {sortedTasks.map(task => {

                const taskTypeDicionary = {
                    workTime : "Foco",
                    shortBreakTime : "Descanso Curto",
                    longBreakTime : "Descanso Longo",

                }   
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{formatDate(task.startDate)}</td>   
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDicionary[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplates>
  );
}