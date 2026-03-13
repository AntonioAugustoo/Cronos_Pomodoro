import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
 const [state,dispatch] = useReducer(taskReducer, initialTaskState, initialState => {
  const storedState = localStorage.getItem('state');

  if(storedState == null) return initialState;

  const parsedState = JSON.parse(storedState) as TaskStateModel;



  return {
    ...parsedState,
      activeTask: null,
      secondsRemaning: 0,
      formattedSecondsRemaining: '00:00',
  };
 }

 );  
 const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);


const worker = TimerWorkerManager.getInstance();

  useEffect(() => {

    localStorage.setItem('taskState', JSON.stringify(state));
    worker.onmessage(e => {
      const countDownSeconds = e.data;
      

      if (countDownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }
        dispatch({type: TaskActionTypes.COMPLETE_TASK});
        worker.terminate();
      } else {
        dispatch({type: TaskActionTypes.COUNT_DOWN, payload: {secondsRemaining: countDownSeconds}});
      }
    });

    if (!state.activeTask) {
      worker.terminate();
    } else {
      worker.postMessage(state);
    }
    
    document.title = `${state.formattedSecondsRemaining} - Cronos Pomodoro`;
  }, [worker, state]);

  useEffect(() => {
    
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);
   


  return (

    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
} 