import { PlayCircleIcon, StopCircleIcon} from 'lucide-react';
import { Cycles } from '../Cycles';
import { Input } from '../Input.tsx';
import { DefaultButton } from '../DefaultButton.tsx/index.tsx';
import {useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext.ts';
import { getNextCycle } from '../../utils/GetNextCycle.ts';
import { getNextCycleType } from '../../utils/GetNextCycleType.ts';
import { Tips } from '../Tips/index.tsx';
import { showMessage } from '../../adapters/showMessage.ts';






export function MainForm() {

  const{state,dispatch} = useTaskContext()
   const taskNameInput = useRef<HTMLInputElement>(null);
   const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

   const nextCycle = getNextCycle(state.currentCycle);
   const nextCyleType = getNextCycleType(nextCycle);
   


function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  showMessage.dismiss();

if (taskNameInput.current == null) return;

const taskName = taskNameInput.current.value.trim();

if ( taskName === '') {
 showMessage.warn('Digite o nome da tarefa');
  return;
}

const newTask = {
  id: String(new Date().getTime()),
  name: taskName,
  startDate: new Date().getTime(),
  completeDate: null,
  interruptDate: null,
  duration: state.config[nextCyleType],
  type: nextCyleType,
};




dispatch({type: 'START_TASK', payload: newTask});

 showMessage.success('Tarefa iniciada');

}

function handleInterruptTask() {
  showMessage.dismiss();
    showMessage.error('Tarefa interrompida!');
dispatch({type: 'INTERRUPT_TASK'});
}

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
    
      <div className='formRow'>
        <Input
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
           ref={taskNameInput}
           disabled={!!state.activeTask}
           defaultValue={lastTaskName}
           
        />
      </div>

      <div className='formRow'>
        <Tips />
      </div>

{state.currentCycle > 0 &&  (
      <div className='formRow'>
        <Cycles />
      </div>
 )}
      <div className='formRow'>
        {!state.activeTask && (
        <DefaultButton 
        aria-label ='Iniciar uma nova tarefa' 
        title='Iniciar uma nova tarefa'
        type ='submit' icon={<PlayCircleIcon />}
        key = 'botao_submit'
         />
           )}

        {!!state.activeTask && (
          <DefaultButton aria-label ='Interromper tarefa em andamento' 
          title='Interromper tarefa em andamento'
          color = 'red'
          type ='button' icon={<StopCircleIcon />} 
          onClick={handleInterruptTask}
            key='botao_button'
            />
        )}



      </div>
    </form>
  );
}





