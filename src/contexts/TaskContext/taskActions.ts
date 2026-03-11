import type { TaskModel } from "../../models/TaskModel";


export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',

} as const;

export type TaskActionsWithPayload =
  | {
      type: 'START_TASK';
      payload: TaskModel;
    }
  | {
      type: 'COUNT_DOWN';
      payload: {secondsRemaining: number};
    }
  | {
      type: 'COMPLETE_TASK';
    };
    

export type TaskActionsWithoutPayload = 
| {
      type: 'RESET_STATE';
    }
  | {
      type: 'INTERRUPT_TASK';
    }
  | {
      type: 'COMPLETE_TASK';
    };
    




export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;